import React, {useContext} from 'react'
import './Cart.css'
import {StoreContext} from '../../context/storeContext.jsx'

const Cart = ()=>{
    const {cartItems, food_list, removeCartItems, emptyCartItems } = useContext(StoreContext)

    return(
        <div className='cart'>
            <div className="cart-items">
                <div className='cart-items-title'>
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
            </div>
            {
                food_list.map((item, index)=>{
                    if(cartItems[item._id] > 0){
                        return(
                            <>
                            <div className='cart-items-title cart-items-item'>
                                <img src={item.image} alt='' />
                                <p>{item.name}</p>
                                <p>${item.price}</p>
                                <p>{cartItems[item._id]}</p>
                                <p>${item.price * cartItems[item._id]}</p>
                                <p onClick={()=>emptyCartItems(item._id)} style={{cursor:'pointer'}}>x</p>
                            </div>
                            <hr/>
                            </>
                        )
                    }
                })
            }
            <div className='cart-bottom'>
                
                <div style={{display:'flex', justifyContent:'center'}}>
                    <h2>Cart Totals</h2>
                </div>

                <div className='cart-total'>
                    
                    <div className='cart-invoice'>
                        <div className="card-total-detail">
                            <p>Subtotal</p>
                            <p>{0}</p>
                        </div>
                        <hr />
                        <div className="card-total-detail">
                            <p>Delivery Fee</p>
                            <p>{2}</p>
                        </div>
                        <hr />
                        <div className="card-total-detail">
                            <b>Total</b>
                            <b>{0}</b>
                        </div>
                        <button>PROCEED TO CHECK OUT</button>
                    </div>
                    <div className='cart-promocode'>
                        <div className='cart-promocode-contents'>
                            <p>If you have a promo code, Enter it here</p>
                            <div className='cart-promocode-input'>
                                <input type='text' placeholder='promo code'/>
                                <button>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart