import React from 'react'
import Cdata from '../mainpage/Cdata'
import Slider from 'react-slick'


const TopCart = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
   
  };
  return (
    <>
    <Slider {...settings}>
      {
        Cdata.map((value, index)=>{
          return(
            <>
              <div className="box product" key={index}>
                <div className="nametop d_flex">
                  <span className="tleft">{value.para}</span>
                  <span className="tright">{value.desc2}</span>
                </div>
              <div className="img">
                <img src={value.cover2} alt='img'/>
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

export default TopCart