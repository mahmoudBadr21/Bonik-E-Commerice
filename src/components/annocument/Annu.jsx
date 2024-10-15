import React from 'react'
import banner1 from '../../images/banner-1.png'
import banner2 from '../../images/banner-2.png'

const Annu = () => {
  return (
    <>
      <section className='annouc background'>
        <div className="container d_flex">
          <div className="img">
            <img src={banner1} alt='' width='auto' height='auto' />
          </div>
          <div className="img">
            <img src={banner2} alt='' width='100%' height='auto' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Annu