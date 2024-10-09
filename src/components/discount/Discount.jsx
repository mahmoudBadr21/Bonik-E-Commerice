import React from 'react'
import Dcard from './Dcard'

const Discount = () => {
  return (
    <>
      <div className="dis background newarrivals">
        <div className="container">
          <div className="heading d_flex">

            <div className="heading-left row a_flex">
              <i className="fa-solid fa-gift"></i>

              <h2>Big Discount</h2>
            </div>

            <div className="heading-right row">
              <span>View all</span>
              <i className="fa fa-caret-right"></i>
            </div>

          </div>

          <Dcard />
        </div>
      </div>
    </>
  )
}

export default Discount