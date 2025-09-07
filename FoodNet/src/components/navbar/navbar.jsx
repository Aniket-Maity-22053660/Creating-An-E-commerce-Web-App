import React, { useState } from 'react'
import {assets} from "../../assets/assets.js"
import './navbar.css'
const Navbar = ({setShowLogin})=>{
    const [menu, setMenu] = useState('home')

    return(
    <div className='navbar'>
        <img
  src={assets.logo}
  alt="Logo" className="logo"/>
  <ul className="navbar-menu">
    <a href='/' onClick={()=>setMenu('home')}className={menu === 'home' ? "active" : ''}>home</a>
    <a href='#explore-menu' onClick={()=>setMenu('menu')} className={menu === 'menu' ? 'active' : ''}>menu</a>
    <a href='#app-download' onClick={()=>setMenu('mobile-app')} className={menu === 'mobile-app' ? 'active' : ''}>mobile-app</a>
    <a href='#footer' onClick={()=>setMenu('contact-us')} className={menu === 'contact-us' ? 'active' : ''}>contact us</a>
  </ul>
  <div className="navbar-right">
    <img src={assets.search_icon} alt=""/>
    <div className="navbar-search-icon">
        <img src={assets.basket_icon} alt=""/>
        <div className="dot"></div>
    </div>
    <button onClick={()=>{return setShowLogin(true)}}>Sign in</button>
  </div>
    </div>
    )
}

export default Navbar