import React from 'react'
import axios from 'axios'
import './PlaceOrder.css'
import { useContext, useState } from 'react'
import {StoreContext} from '../../context/storeContext.jsx'
import { useEffect } from 'react'

const PlaceOrder = ()=>{
    
    const {total, setTotalPrice, token, food_list, cartItems, url} = useContext(StoreContext)

    const [data, setData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        street:"",
        city:"",
        state:"",
        zipcode:"",
        country:"",
        phone:""
    })

    const onChangeHandler = (event)=>{
        const name = event.target.name
        const value = event.target.value
        setData((prev)=>({...prev, [name]: value}))
    }

    useEffect(()=>{
        console.log(data)
    }, [data])

    const placeOrder = async (event)=>{
        event.preventDefault()
        let orderItems = []
        food_list.forEach((item)=>{
            if(cartItems[item._id] > 0){
                let itemInfo = item
                itemInfo["quantity"] = cartItems[item._id]
                orderItems.push(itemInfo)
            }
        })
        const orderDetails = {
            items:orderItems,
            address:data,
            amount:total+2
        }
        const response = await axios.post(url+'/order/place', orderDetails, {headers:{token}})
        if(response.data.success){
            const session_url = response.data.session_url
            window.location.replace(session_url)
        }else{
            alert("Error!")
        }
    }

    return (
        <form onSubmit={(e)=>placeOrder(e)} className='place-order'>
           <div className='place-order-left'>
            <p className='title'>Delivery Information</p>
            <div className='multi-fields'>
                <input required name='firstName' value={data.firstName} onChange={(e)=>onChangeHandler(e)} type='text' placeholder='First Name'/>
                <input required name='lastName' value={data.lastName} onChange={(e)=>onChangeHandler(e)} type='text' placeholder='Last Name' />
            </div>
            <input required name='email' value={data.email} onChange={(e)=>onChangeHandler(e)} type='email' placeholder='Email Address'/>
            <input required name='street' value={data.street} onChange={(e)=>onChangeHandler(e)} type='text' placeholder='Street'/>
            <div className='multi-fields'>
                <input required name='city' value={data.city} onChange={(e)=>onChangeHandler(e)} type='text' placeholder='City'/>
                <input required name='state' value={data.state} onChange={(e)=>onChangeHandler(e)} type='text' placeholder='State'/>
            </div>
            <div className='multi-fields'>
                <input required name='zipcode' value={data.zipcode} onChange={(e)=>onChangeHandler(e)} type='text' placeholder='Zip Code'/>
                <input required name='country' value={data.country} onChange={(e)=>onChangeHandler(e)} type='text' placeholder='Country' />
            </div>
            <input required name='phone' value={data.phone} onChange={(e)=>onChangeHandler(e)} type='text' placeholder='Contact Number'/>
           </div>
           <div className='place-order-right'>
            <h2>Cart Totals</h2>
            <div className='cart-invoice'>
                        <div className="card-total-detail">
                            <p>Subtotal</p>
                            <p>${total}</p>
                        </div>
                        <hr />
                        <div className="card-total-detail">
                            <p>Delivery Fee</p>
                            <p>${total ? 2 : 0}</p>
                        </div>
                        <hr />
                        <div className="card-total-detail">
                            <b>Total</b>
                            <b>${total ? 2 + total : 0}</b>
                        </div>
                <button type="submit">PROCEED TO PAY</button>
            </div>
           </div>
        </form>
    )
}

export default PlaceOrder