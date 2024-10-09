import React from 'react'
import Cart from './Cart'
import './style.css'
// import icon from 'https://img.icons8.com/glyph-neue/64/26e07f/new.png'

const NewArrivals = () => {
  return (
    <>
      <section className="newarrivals background">
        <div className="container">
          <div className="heading d_flex">

            <div className="heading-left row a_flex">
              <i className="icon">New</i>
              {/* <img src={icon} alt='' width='40' height='40' /> */}

              <h2>New Arrivals</h2>
            </div>

            <div className="heading-right row">
              <span>View all</span>
              <i className="fa fa-caret-right"></i>
            </div>

          </div>

          <Cart />

        </div>
      </section>
    </>
  )
}

export default NewArrivals