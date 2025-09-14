import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import { toast } from 'react-toastify'

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
    const [token, setToken] = useState("")
    const [cartItems, setCartItems] = useState({})
    const [total, setTotal] = useState(0)
    const [food_list, setFoodList] = useState([])
    const addCartItems = async (itemId) =>{
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev, [itemId] : 1}))
        }else{
            setCartItems((prev)=>({...prev, [itemId] : prev[itemId] + 1}))
        }
        if(token){
            try{
            const response = await axios.post(url+'/cart/add',{itemId}, {headers:{token}})
            if(response.data.success){
            console.log(response.data.message)
            }else{
                toast.error(response.data.message)
            }
            }catch(e){
                console.log(e)
            }
        }else{
            console.log("Sorry! User not authenticated.")
        }
    }
    const removeCartItems = async (itemId, all=false)=>{
        if(!all){
        setCartItems((prev)=>({...prev, [itemId] : prev[itemId] - 1}))
        }else{
            emptyCartItems(itemId)
        }
        if(token){
            try{
            let response = await axios.post(url+'/cart/remove', {itemId, all}, {headers:{token}})
            
            if(response.data.success){
                console.log(response.data.message)
            }else{
                toast.error(response.data.message)
            }
            }catch(e){
                console.log(e)
            }
        }else{
            console.log("Sorry! User is not authenticated.")
        }
    }
    const loadCartItems = async (token)=>{
        if(token){
            try{
                let response = await axios.get(url+'/cart/get', {headers:{token}})
                if(response.data.success){
                    console.log("Resource fetched successfully!")
                    setCartItems(response.data.cartData)
                }else{
                    toast.error(response.data.message)
                }
            }catch(e){
                console.log(e)
            }
        }else{
            console.log("Sorry! User is not authenticated")
        }
    }
    const emptyCartItems = (itemId)=>{
        setCartItems((prev)=>({...prev, [itemId]: 0}))
    }
    const url = "http://localhost:4000/api"
 
    useEffect(()=>{
        console.log(cartItems)
    }, [cartItems])
    
    let totalPrice = 0
    useEffect(()=>{
        food_list.forEach((item)=>{
            if(cartItems[item._id] > 0){
                totalPrice += cartItems[item._id] * item.price
            }
        })
        setTotal(totalPrice)
    })
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
    useEffect(()=>{
        loadCartItems(token)
    }, [token])
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider