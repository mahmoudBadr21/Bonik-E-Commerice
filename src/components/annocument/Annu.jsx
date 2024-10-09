import React from 'react'
import banner1 from '../../images/banner-1.png'
import banner2 from '../../images/banner-2.png'

const Annu = () => {
  const myStyle1 = {
    width: '30%',
    height: '340px',
  }
  const myStyle2 = {
    width: '68%',
    height: '340px',
  }
  return (
    <>
      <section className='annouc background'>
        <div className="container d_flex">
          <div className="img" style={myStyle1}>
            <img src={banner1} alt='' width='auto' height='auto' />
          </div>
          <div className="img" style={myStyle2}>
            <img src={banner2} alt='' width='100%' height='auto' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Annu