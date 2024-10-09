import React, { useState } from 'react'

const ShopCart = ({shopItems , addToCart}) => {

  const [count , setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }

  return (
    <>
      {shopItems.map((shopItems , index) => {
        return(
          <>
            <div className="box" key={index}>
              <div className="product mtop">
                <div className="img">
                  <span className="discount">{shopItems.discount}% off</span>
                  <img src={shopItems.cover} alt='' width='200' height='200' />
                </div>
                <div className="product-like">
                  <label>0</label> <br />
                  <i className="fa-regular fa-heart" onClick={increment}></i>
                </div>
                <div className="product-details">
                  <h3>{shopItems.name}</h3>
                  <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="price">
                    <h4>{shopItems.price}.00</h4>
                    <button onClick={ () => addToCart(shopItems) }>
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      })}
    </>
  )
}

export default ShopCart