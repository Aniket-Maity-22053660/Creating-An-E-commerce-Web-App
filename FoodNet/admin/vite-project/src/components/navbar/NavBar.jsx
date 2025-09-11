import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets.js'

const NavBar = ()=>{
    return(
        <div className='navbar'>

            <Link to='/' className='logo'><img className='logo' src={assets.logo} alt='' /></Link>
            <img clasName='profile' src={assets.profile_image} alt="" />
        </div>
    )
}

export default NavBar