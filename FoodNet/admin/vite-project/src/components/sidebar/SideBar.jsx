import React, { useState }from 'react'
import './SideBar.css'
import { assets } from '../../assets/assets.js'
import { NavLink } from 'react-router-dom'

const SideBar = ()=>{
    const [selected, setSelected] = useState({add:false, list:false, order:false})

    return(
        <div className='sidebar'>
            <div className='sidebar-options'>
                <NavLink to='/add' className={selected['add'] ? 'selected' : 'sidebar-option'} onClick={()=>{setSelected({['list']:false,['order']:false, ['add'] : true})}}>
                    <img src={assets.add_icon} alt=''/>
                    <p>Add Items</p>
                </NavLink>
                <NavLink to='/list'className={selected['list'] ? 'selected' : 'sidebar-option'} onClick={()=>{setSelected({['list']:false,['order']:false, ['add'] : true})}}>
                    <img src={assets.order_icon} alt=''/>
                    <p>List Items</p>
                </NavLink>
                <NavLink to='/order'className={selected['order'] ? 'selected' : 'sidebar-option'} onClick={()=>{setSelected({['list']:false,['order']:false, ['add'] : true})}}>
                    <img src={assets.order_icon} alt=''/>
                    <p>Order Items</p>
                </NavLink>
            </div>
        </div>
    )
}

export default SideBar