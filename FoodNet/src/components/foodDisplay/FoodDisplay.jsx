import React, { useContext } from 'react'
import './FoodDisplay.css'
import FoodItem from '../foodItem/foodItem.jsx'
import { StoreContext } from '../../context/storeContext.jsx'
import { useState } from 'react'

const FoodDisplay = ({category})=>{

    const {food_list} = useContext(StoreContext)

    return(
        <div className="food-display" id="food-display">
            <h2>Top dishes</h2>
            <div className="food-display-list">
                {   category === 'all' || category === 'active' ?
                    food_list.map((item, index)=>{
                        return (<FoodItem key={index} id={item._id} name={item.name} description={item.description} image={item.image} price={item.price}/>)
                    }) : food_list.map((item, index)=>{
                        if(item.category === category){
                            return (<FoodItem key={index} id={item._id} name={item.name} description={item.description} image={item.image} price={item.price}/>)
                        }
                    })
                }
            </div>
        </div>
    )
}

export default FoodDisplay