import React from 'react'
import DCard from './DCard'

const Discount = () => {
  return (
    <>
    <section className="disount background newarrivals">
      <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row f_flex">
              <i className='fa fa-border-all'></i>
              <h2>Big Discounts</h2>
            </div>
            <div className="heading-right row">
              <span>View all</span>
              <i className='fa fa-caret-right'></i>
            </div>
          </div>
          <DCard/>
        </div>
    </section>
    </>
  )
}

export default Discount