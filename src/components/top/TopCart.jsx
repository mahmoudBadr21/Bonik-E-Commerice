import React from 'react'
import Tdata from './Tdata'
import Slider from "react-slick"
import './style.css'

const TopCart = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 615,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  }
  return (
    <>
      <Slider {...settings}>
        {
          Tdata.map((value , index) => {
            return (
              <>
                <div className="box product" key={index}>
                  <div className="nametop d_flex">
                    <span className="tleft">{value.para}</span>
                    <span className="tright">{value.desc}</span>
                  </div>
                  <div className="img">
                    <img src={value.cover} alt='' width="320" height="auto" />
                  </div>
                </div>
              </>
            )
          })
        }
      </Slider>
    </>
  )
}

export default TopCart