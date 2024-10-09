'use client'
import './all.min.css'
import { useState } from 'react'
import { Routes ,Route } from 'react-router-dom'
import './App.css'
import Header from './common/header/Header';
import Pages from './pages/Pages';
import Data from './components/flashDeals/Data';
import Cart from './common/Cart/Cart';
import Sdata from './components/shops/Sdata';
import Footer from './common/footer/Footer';

function App() {
  const {productItems} = Data
  const {shopItems} = Sdata

  const [cartItem , setCartItem] = useState([])

  const addToCart = (product) => {
    console.log(cartItem.length);
    const productExit = cartItem.find((item) => item.id === product.id)
    if (productExit){
      setCartItem(cartItem.map((item) =>
        (item.id === product.id?
          {...productExit, qty : productExit.qty+1} : item )))
    } else {
      setCartItem([...cartItem , {...product, qty: 1}])
    }
  }

  const decreaseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)
    if(productExit.qty === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id))
    } 
    else {
      setCartItem(cartItem.map((item) => 
        (item.id === product.id ? {...productExit, qty : productExit.qty-1} : item))
      )
    }
  }

  const removeCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)
    if(productExit.qty === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id))
    } else {
      setCartItem(cartItem.map((item) => 
      (item.id === product.id ? {...productExit, qty : 1} : item))
      )
    }
  }

  return (
    <>
      <Header cartItem={cartItem} />
        <Routes>
          <Route
            path='/'
            element={
              <Pages productItems={productItems}
              addToCart={addToCart}
              shopItems={shopItems} />
            } exact
          />

          <Route
            path='/cart'
            element={
              <Cart cartItem={cartItem}
              addToCart={addToCart}
              decreaseQty={decreaseQty}
              removeCart={removeCart} />
            }
          />

        </Routes>
        <Footer />
    </>
  )
}

export default App
