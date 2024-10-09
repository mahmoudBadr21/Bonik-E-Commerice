import React, { useState } from 'react'
import Slider from "react-slick"


const NextArrow = (props) => {
  const { onClick } = props
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i className="fa fa-long-arrow-right"></i>
      </button>
    </div>
  )
}

const PrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i className="fa fa-long-arrow-left"></i>
      </button>
    </div>
  )
}

const FlashCard = ({productItems , addToCart}) => {

  const [count , setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:<NextArrow />,
    prevArrow:<PrevArrow />,
  }
  return (
    <>
      <Slider {...settings}>
      {productItems.map((productItems , index) => {
        return(
          <>
            <div className="box" key={index}>
              <div className="product mtop">
                <div className="img">
                  <span className="discount">{productItems.discount}% off</span>
                  <img src={productItems.cover} alt='' width='200' height='200' />
                </div>
                <div className="product-like">
                  <label>0</label> <br />
                  <i className="fa-regular fa-heart" onClick={increment}></i>
                </div>
                <div className="product-details">
                  <h3>{productItems.name}</h3>
                  <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="price">
                    <h4>{productItems.price}.00</h4>
                    <button onClick={ () => addToCart(productItems) }>
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      })}
      </Slider>
    </>
  )
}

export default FlashCard