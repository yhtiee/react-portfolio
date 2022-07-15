import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../Assets/personalpic.png'
import Headersocials from './Headersocials'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5> Hello I'm</h5>
        <h1> Utibeabasi Ukeme</h1>
        <h5 className="text-light"> Fullstack Developer </h5>
        <CTA/>
        <Headersocials/>
        <div className="className me">
          <img src={ME} alt="" />
        </div>
        <a href="#contact" className='scroll__down'> Scroll Down</a>
      </div>  
    </header>
  )
}

export default Header