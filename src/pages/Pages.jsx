import React from 'react'
import FlashDeals from '../components/deals/FlashDeals'
import Discount from '../components/discount/Discount'
import Home from '../components/mainpage/Home'
import NewArrivals from '../components/newOnes/NewArrivals/NewArrivals'
import TopCate from '../components/top/TopCate'



const Pages = ({productItems,cartItem, addToCart}) => {
  return (
    <>
    <Home cartItem={cartItem}/>
    <FlashDeals productItems={productItems} addToCart={addToCart}/>
    <TopCate/>
    <NewArrivals/>
    <Discount />
    </>
  )
}

export default Pages