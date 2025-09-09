import { createContext, useEffect, useState } from "react";
import { food_list } from '../assets/assets.js';

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({})

    const addCartItems = (itemId) =>{
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev, [itemId] : 1}))
        }else{
            setCartItems((prev)=>({...prev, [itemId] : prev[itemId] + 1}))
        }
    }
    const removeCartItems = (itemId)=>{
        setCartItems((prev)=>({...prev, [itemId] : prev[itemId] - 1}))
    }
    const emptyCartItems = (itemId)=>{
        setCartItems((prev)=>({...prev, [itemId]: 0}))
    }
    useEffect(()=>{
        console.log(cartItems)
    }, [cartItems])
    const contextValue = {
        food_list, 
        cartItems, 
        setCartItems, 
        addCartItems, 
        removeCartItems,
        emptyCartItems
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider