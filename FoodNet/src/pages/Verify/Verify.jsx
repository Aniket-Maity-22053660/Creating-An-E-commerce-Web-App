import React, { useContext } from 'react'
import './Verify.css'
import {useSearchParams, useNavigate} from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import {StoreContext} from '../../context/storeContext.jsx'
import {toast} from "react-toastify"


const VerifyPayment = ()=>{

    const [searchParams, setSearchParams] = useSearchParams()
    const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")
    const {url} = useContext(StoreContext)

    const navigate = useNavigate()

    const verify = async ()=>{
        try{
        
            const response = await axios.post(url+'/order/verify', {success, orderId})
            if(response.data.success){
                setTimeout(()=>{navigate('/my-orders');toast.success("Payment Successful!")}, 7000)
            }else{
                navigate('/place-order')
                toast.error("Payment Failed!")
            }
        }catch(e){
            console.log(e)
        }
    }
    
    useEffect(()=>{
        
        verify()
    }, [])

    return (
        <div className='verify'>
            <div className='spinner'></div>
        </div>
    )
} 

export default VerifyPayment