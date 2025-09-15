import React, {useEffect, useState} from 'react'
import { assets } from './assets/assets'
import  Navbar  from './components/navbar/navbar.jsx'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Cart from './pages/Cart/Cart.jsx'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.jsx'
import VerifyPayment from './pages/Verify/Verify.jsx'
import Footer from './components/footer/Footer.jsx'
import LoginPopUp from './components/loginPopUp/LoginPopUp.jsx'
import MyOrders from './pages/MyOrders/MyOrders.jsx'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  const [showLogin, setShowLogin] = useState(false)

  useEffect(()=>{
    console.log('showLogin')
  }, [showLogin])

  return(
     
    <>
    <ToastContainer
    position="top-center"
  autoClose={3000}
  newestOnTop
  theme="colored"
  style={{ zIndex: 999999 }} 
    />
    {showLogin ? <LoginPopUp setShowLogin={setShowLogin}/> : <></>}
    <div className='App'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element = { <Home /> }/>
        <Route path='/cart' element = { <Cart /> }/>
        <Route path='/place-order' element = { <PlaceOrder /> }/>
        <Route path='/verify' element={<VerifyPayment />} />
        <Route path='/my-orders' element={<MyOrders />} />
      </Routes>
    </div>
    <Footer />
    </>
    

    
  )
}

export default App