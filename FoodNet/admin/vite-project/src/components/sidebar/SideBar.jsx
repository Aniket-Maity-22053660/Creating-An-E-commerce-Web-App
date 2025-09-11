import React from 'react'
import './SideBar.css'
import { assets } from '../../assets/assets.js'

const SideBar = ()=>{
    return(
        <div className='sidebar'>
            <div className='sidebar-options'>
                <div className='sidebar-option'>
                    <img src={assets.add_icon} alt=''/>
                    <p>Add Icons</p>
                </div>
                <div className='sidebar-option'>
                    <img src={assets.order_icon} alt=''/>
                    <p>List Items</p>
                </div>
                <div className='sidebar-option'>
                    <img src={assets.order_icon} alt=''/>
                    <p>Order Items</p>
                </div>
            </div>
        </div>
    )
}

export default SideBar