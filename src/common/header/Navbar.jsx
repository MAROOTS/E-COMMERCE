import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  const [MobileMenu, setMobileMenu]=useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='categories d_flex'>
            <span className='fa fa-border-all'></span>
            <h4>
              Categories <i className='fa fa-chevron-down'></i>
            </h4>
          </div>
          <div className='navlink'>
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={()=>setMobileMenu(false)}>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/vendor'>Vendor</Link>
              </li>
              <li>
                <Link to='/cart'>View Orders</Link>
              </li>
              <li>
                <Link to='/account'>Contact</Link>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-bth'></i> :
              <i className='fa fa-bars open'></i>
              }
            </button>
          </div>
        </div>
        
      </header>
    </>
  )
}

export default Navbar