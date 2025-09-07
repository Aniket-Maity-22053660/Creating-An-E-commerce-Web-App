import React, { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'

const LoginPopUp = ({setShowLogin})=>{
    const [currState, setCurrState] = useState("Sign Up")
    return (
        <div className='login-popup'>
            <form className='login-popup-container'>
                <div className='login-popup-title'>
                    <h2>{currState}</h2>
                    <img style={{'cursor' : 'pointer'}}onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt=''/>
                </div>
                <div className='login-popup-inputs'>
                    {currState === 'Log In' ? <></> : <input type='text' placeholder='Your Name' requred/>}
                    <input type='text' placeholder='Your Email' required/>
                    <input type='password' placeholder='Password' required/>
                    <button>
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