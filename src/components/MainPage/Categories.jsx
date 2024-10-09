import React from 'react'
import cat1 from '../../images/category/cat1.png'
import cat2 from '../../images/category/cat2.png'
import cat3 from '../../images/category/cat3.png'
import cat4 from '../../images/category/cat4.png'
import cat5 from '../../images/category/cat5.png'
import cat6 from '../../images/category/cat6.png'
import cat7 from '../../images/category/cat7.png'
import cat8 from '../../images/category/cat8.png'
import cat9 from '../../images/category/cat9.png'
import cat10 from '../../images/category/cat10.png'
import cat11 from '../../images/category/cat11.png'

const Categories = () => {
  const data = [
    {
      cateImg: cat1,
      cateName: "Fashion",
    },
    {
      cateImg: cat2,
      cateName: "Electronic",
    },
    {
      cateImg: cat3,
      cateName: "Cars",
    },
    {
      cateImg: cat4,
      cateName: "Home & Garden",
    },
    {
      cateImg: cat5,
      cateName: "Gifts",
    },
    {
      cateImg: cat6,
      cateName: "Music",
    },
    {
      cateImg: cat7,
      cateName: "Health & Beauty",
    },
    {
      cateImg: cat8,
      cateName: "Pets",
    },
    {
      cateImg: cat9,
      cateName: "Baby Toys",
    },
    {
      cateImg: cat10,
      cateName: "Groceries",
    },
    {
      cateImg: cat11,
      cateName: "Books",
    },
  ]

  return (
    <>
      <div className="category boxShadow">
        {
          data.map((value , index) => {
            return(
              <div className="box d_flex" key={index}>
                <img src={value.cateImg} alt='' width="30" height="30" />
                <span>{value.cateName}</span>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Categories