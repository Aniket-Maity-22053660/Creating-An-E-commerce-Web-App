import React, { useState, useContext } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'
import { useEffect } from 'react'
import { StoreContext } from '../../context/storeContext'
import {toast} from 'react-toastify'
import axios from 'axios'

const LoginPopUp = ({setShowLogin})=>{
    const [currState, setCurrState] = useState("Sign Up")
    const [data, setData] = useState({name:"", email:"", password:""})

    const { url, token, setToken } = useContext(StoreContext)

    const onChangeHandler = (event)=>{
        const name = event.target.name
        const value = event.target.value

        setData((prev)=>{return {...prev, [name]:value}})
    }

    const onLogin = async (event)=>{
        event.preventDefault()
        const newURL = url+'/user/login'
        const response = await axios.post(newURL, data)
        console.log(response)
        if(response.data.success){
            setToken(response.data.token)
            localStorage.setItem("token", response.data.token)
            setShowLogin(false)
            toast.success("Logged In Successfully!")
        }else{
            toast.error(response.data.message)
        }

    }
    const onSignUp = async (event)=>{
        event.preventDefault()
        const newURL = url + '/user/register'
        const response = await axios.post(newURL, data)
        console.log(response.data)
        if(response.data.success){
            setToken(response.data.token)
            localStorage.setItem("token", response.data.token)
            setShowLogin(false)
            toast.success("Signed In Successfully!")
        }else{
            toast.error(response.data.message)
        }
    }
    useEffect(()=>{
        console.log(data)
    }, [data])
    return (
        <div className='login-popup'>
            <form className='login-popup-container' onSubmit={(e)=>currState == "Sign Up" ? onSignUp(e) : onLogin(e)}>
                <div className='login-popup-title'>
                    <h2>{currState}</h2>
                    <img style={{'cursor' : 'pointer'}}onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt=''/>
                </div>
                <div className='login-popup-inputs'>
                    {currState === 'Log In' ? <></> : <input value={data.name} name='name' onChange={(e)=>onChangeHandler(e)} type='text' placeholder='Your Name' requred/>}
                    <input value={data.email} name='email' onChange={(e)=>onChangeHandler(e)} type='text' placeholder='Your Email' required/>
                    <input value={data.password} name='password' onChange={(e)=>onChangeHandler(e)} type='password' placeholder='Password' required/>
                    <button type='submit'>
                        {currState === 'Sign Up' ? "Create Account" : "Login Now"}
                    </button>

                    <div className='login-popup-condition'>
                        <input type='checkbox' required/>
                        <p>I agree to the terms of use & privacy policy.</p>
                    </div>
                    <div className='login-signup'>
                        {
                            currState === 'Log In' ? 
                            <p>Create a new account? <span onClick={ ()=>setCurrState('Sign Up')}>Click Here</span></p> : 
                            <p>Already have an account? <span onClick={ ()=>setCurrState('Log In')}>Login Here</span></p>
                        }
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LoginPopUp