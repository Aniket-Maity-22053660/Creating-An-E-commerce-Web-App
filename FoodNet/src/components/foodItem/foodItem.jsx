import React, {useState, useContext} from 'react'
import './foodItem.css'
import { assets } from '../../assets/assets.js'
import {StoreContext} from '../../context/storeContext.jsx'

const FoodItem = ({id, name, description, image, price}) =>{
    //const [itemCount, setItemCount] = useState(0)
    const {cartItems, setCartItems, addCartItems, removeCartItems} = useContext(StoreContext)

    return(
        <div className='food-item'>
            <div className='food-item-img-container'>
                <img className='food-item-image' src={`http://localhost:4000/image/${image}`} alt=''/>
                {
                    !cartItems[id]?<img className='add' onClick={()=>addCartItems(id)} src={assets.add_icon_white} alt=''/>:
                    <div className='food-item-counter'>
                        <img onClick={()=>removeCartItems(id)} src={assets.remove_icon_red} alt=''/>
                        <p>{cartItems[id]}</p>
                        <img onClick={()=>addCartItems(id)} src={assets.add_icon_green} alt=''/>
                    </div>
                }
            </div>
            <div className='food-item-info'>
                <div className='food-item-name-rating'>
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt=''/>
                </div>
                <p className='food-item-desc'>{description}</p>
                <p className='food-item-price'>${price}</p>
            </div>
        </div>
    )
}


export default FoodItem