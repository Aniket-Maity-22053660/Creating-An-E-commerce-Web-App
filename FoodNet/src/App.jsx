import React from 'react'
import { assets } from './assets/assets'
import  Navbar  from './components/navbar/navbar.jsx'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Cart from './pages/Cart/Cart.jsx'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.jsx'

const App = () => {
  return(
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element = { <Home /> }/>
        <Route path='/cart' element = { <Cart /> }/>
        <Route path='/place-order' element = { <PlaceOrder /> }/>
      </Routes>
    </div>
  )
}

export default App