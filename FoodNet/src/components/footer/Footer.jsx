import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets.js'

const Footer = ()=>{
    return (
        <div className='footer' id='footer'>
            <div className='footer-content'>
                <div className='footer-content-left'>
                    <img className='logo' src={assets.logo}/>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius facere expedita beatae dolore tenetur ad odio fugit maxime, ex eum odit doloribus quis veritatis, iste consequatur eaque porro quam in.</p>
                    <div className='footer-social-icons'>
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className='footer-content-center'>
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className='footer-content-right'>
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91 9547256351</li>
                        <li>22053660@kiit.ac.in</li>
                    </ul>
                </div>
                
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024 © Tomato.com - All Right Reserved</p>
        </div>
    )
}

export default Footer