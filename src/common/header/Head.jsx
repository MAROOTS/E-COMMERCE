import React from 'react'
import {Link} from "react-router-dom"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label>+25490746578584</label>
            <i className='fa-fa-envelope'></i>
            <label>kademieugine@gmail.com</label>
          </div>
          <div className='right row Rtext'>
            <label>Theme FAQ's</label>
            <label><Link for='/contact'>Need help?</Link></label>
          </div>
        </div>
      </section>
   </>
  )
}

export default Head