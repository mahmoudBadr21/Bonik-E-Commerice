import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [MobilMenu , setMobilMenu] = useState(false)

  return (
    <>
      <header className='header'>
        <div className="container c_flex">
          <div className="categrories d_flex">
            <span className='fa-solid fa-border-all'></span>
            <h4>
              Categrories <i className="fa fa-chevron-down"></i>
            </h4>
          </div>
          <div className="navLink">
            <ul
              className={MobilMenu? "nav-links-MobileMenu" : "link f_flex capitalize"}
              onClick={() => setMobilMenu(false)}
            >
              <li>
                <Link to='/'>home</Link>
              </li>
              <li>
                <Link to='/pages'>pages</Link>
              </li>
              <li>
                <Link to='/user'>user account</Link>
              </li>
              <li>
                <Link to='/vender'>vender acount</Link>
              </li>
              <li>
                <Link to='/track'>track my order</Link>
              </li>
              <li>
                <Link to='/contact'>contact</Link>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobilMenu(!MobilMenu)}>
              {
                MobilMenu? <i className='fas fa-times close home-btn'></i> :
                <i className='fas fa-bars open'></i>
              }
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar