import React from 'react'
import { Link } from 'react-router-dom'

const Search = ({cartItem}) => {
  window.addEventListener("scroll", function(){
    const Search =document.querySelector(".Search")
    Search.classList.toggle("active", window.scrollY>100)
  })
  return (
    <>
    <section className='Search'>
      <div className='container c_flex'>
        <div className='logo width'>
          <img src={process.env.PUBLIC_URL +'images/Img8.png'} alt=''style={{width:"50px"}}/>
        </div>
        <div className='search-box f_flex'>
          <i className='fa fa-search'></i>
          <input type="text" placeholder='Search...' />
          <span>All Category</span>
        </div>

        <div className='icon f_flex width'>
          <i className='fa fa-user icon_circle'></i>
          <div className='cart'>
            <Link to='/cart'>
              <i className='fa fa-shopping-bag icon-circle'></i>
              <span>{cartItem.length=== 0 ? "" : cartItem.length}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
    
    </>
  )
}

export default Search