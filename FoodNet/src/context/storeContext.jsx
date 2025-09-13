import { createContext, useEffect, useState } from "react";
import axios from 'axios'
export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({})
    const [total, setTotal] = useState(0)
    const [food_list, setFoodList] = useState([])
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
    const url = "http://localhost:4000/api"
    const [token, setToken] = useState("")
    useEffect(()=>{
        console.log(cartItems)
    }, [cartItems])
    const contextValue = {
        food_list, 
        cartItems, 
        setCartItems, 
        addCartItems, 
        removeCartItems,
        emptyCartItems,
        total,
        setTotal,
        url,
        token,
        setToken
    }

    useEffect(()=>{
        async function loadData(){
        if(localStorage.getItem("token")){
            setToken(localStorage.getItem("token"))
        }
        const response = await axios.get(`${url}/food/list`)
        setFoodList(response.data.data)
    }
    loadData()
    }, [])
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider