import React from 'react'
import Ddata from './Ddata'
import Slider from "react-slick"

const Dcard = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
    <>
      <Slider {...settings}>
        {
          Ddata.map((val, index) => {
            return (
              <>
                <div className="box product" key={index}>
                  <div className="img">
                    <img src={val.cover} alt='' width='150' height='150' />
                  </div>
                  <h4>{val.name}</h4>
                  <span>{val.price}</span>
                </div>
              </>
            )
          })
        }
      </Slider>
    </>
  )
}

export default Dcard