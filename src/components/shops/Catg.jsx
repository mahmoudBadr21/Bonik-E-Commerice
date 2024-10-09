import React from 'react'
import cat1 from '../../images/category/cat-1.png'
import cat2 from '../../images/category/cat-2.png'

const Catg = () => {
  const data = [
    {
      cateImg: cat1,
      cateName: "Apple",
    },
    {
      cateImg: cat2,
      cateName: "Samasung",
    },
    {
      cateImg: cat1,
      cateName: "Oppo",
    },
    {
      cateImg: cat2,
      cateName: "Vivo",
    },
    {
      cateImg: cat1,
      cateName: "Redimi",
    },
    {
      cateImg: cat2,
      cateName: "Sony",
    },
  ]
  return (
    <>
      <div className="category boxShadow">
        <div className="chead d_flex">
          <h1>Brands</h1>
          <h1>Shops</h1>
        </div>
        {
          data.map((value, index) => {
            return (
              <div className="box a_flex" key={index}>
                <img src={value.cateImg} alt='' width='auto' height='auto' />
                <span>{value.cateName}</span>
              </div>
            )
          })
        }
        <div className="box box2">
          <button>View All Brands</button>
        </div>
      </div>
    </>
  )
}

export default Catg