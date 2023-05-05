import React from 'react'
import Ddata from './Ddata'
import Slider from 'react-slick';

const DCard = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay:true,
   
  };
  return (
    <> 
      <Slider {...settings}>
      {
      Ddata.map((val, index)=>{
        return(
          <>
            <div className='product'  key={index} style={{height:"30vh"}}>
              <div className='box'>
                <div className="img">
                  <img src={val.cover} alt='img'/>
                </div>
                <h4>{val.name}</h4>
                <span>Ksh: {val.price}</span>
              </div>
            </div>
          </>
        )
      })
    }
    </Slider>
    </>
  )
}

export default DCard