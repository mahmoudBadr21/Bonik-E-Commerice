import React from 'react'
import Home from '../components/MainPage/Home'
import FlashDeals from '../components/flashDeals/FlashDeals'
import TopCate from '../components/top/TopCate'
import NewArrivals from '../components/newarrivals/NewArrivals'
import Discount from '../components/discount/Discount'
import Shop from '../components/shops/Shop'
import Annu from '../components/annocument/Annu'
import Wrapper from '../components/wrapper/Wrapper'

const Pages = ({productItems, cartItem, addToCart, shopItems}) => {
  return (
    <>
      <Home cartItem={cartItem} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate />
      <NewArrivals />
      <Discount />
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Annu />
      <Wrapper />
    </>
  )
}

export default Pages