import React from 'react'
import './PlaceOrder.css'
import { useContext } from 'react'
import {StoreContext} from '../../context/storeContext.jsx'

const PlaceOrder = ()=>{
    
    const {total, setTotalPrice} = useContext(StoreContext)
    return (
        <form className='place-order'>
           <div className='place-order-left'>
            <p className='title'>Delivery Information</p>
            <div className='multi-fields'>
                <input type='text' placeholder='First Name'/>
                <input type='text' placeholder='Last Name' />
            </div>
            <input type='email' placeholder='Email Address'/>
            <input type='text' placeholder='Street'/>
            <div className='multi-fields'>
                <input type='text' placeholder='City'/>
                <input type='text' placeholder='State'/>
            </div>
            <div className='multi-fields'>
                <input type='text' placeholder='Zip Code'/>
                <input type='text' placeholder='Country' />
            </div>
            <input type='text' placeholder='phone'/>
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
                        <button onClick={()=>navigate('/place-order')}>PROCEED TO PAY</button>
            </div>
           </div>
        </form>
    )
}

export default PlaceOrder