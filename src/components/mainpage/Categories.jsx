import React from 'react'

const Categories = () => {
  const data=[
    {
      cateImg:"../images/02.jpg",
      cateName:"Fila",
    },
    {
      cateImg:"../images/adidas.jpg",
      cateName:"Adidas",
    },
    {
      cateImg:"../images/converse.jpg",
      cateName:"Converse",
    },
    {
      cateImg:"../images/new bal.jpg",
      cateName:"New Balance",
    },
    {
      cateImg:"../images/van.jpg",
      cateName:"Vans",
    },
    {
      cateImg:"../images/05.jpg",
      cateName:"Puma",
    },
    {
      cateImg:"../images/jordan.jpg",
      cateName:"Jordans",
    },
    {
      cateImg:"../images/air force.jpeg",
      cateName:"Air Force 1",
    },
    {
      cateImg:"../images/balency.jpg",
      cateName:"Balenciaga",
    },
  ]
  return (
    <>
      <div className="category">
        {data.map((value, index)=>{
          return(
            <div className="box f_flex" key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories