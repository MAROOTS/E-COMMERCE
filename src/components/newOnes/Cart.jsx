import React from 'react'
import Ndata from './NewArrivals/Ndata'

const Cart = () => {
  return (
    <>
      <div className="content grid product" height='30vh'>
      {
      Ndata.map((val, index)=>{
        return(
          <div className="box" key={index}  >
            <div className="img">
              <img src={val.cover} alt='img'/>
            </div>
            <h4>{val.name}</h4>
            <span>{val.price}</span>
          </div>
        )
      })
    }
      </div>
    </>
  )
}

export default Cart