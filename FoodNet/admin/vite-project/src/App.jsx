import React from 'react'
import NavBar from './components/navbar/NavBar.jsx'
import SideBar from './components/sidebar/SideBar.jsx'
import { Routes, Route } from 'react-router-dom'
import Add from './pages/Add/Add.jsx'
import List from './pages/List/List.jsx'
import Orders from './pages/Orders/Orders.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './index.css'

const App = ()=>{

  return (
  <div>
    <ToastContainer />
    <NavBar />
    <hr />
    <div className='app-content'>
      <SideBar/>
      <div>
      <Routes>
        <Route path='/add' element={<Add />}/>
        <Route path='/list' element={<List />}/>
        <Route path='/order' element={<Orders />} />
      </Routes>
      </div>
    </div>
  </div>
  )
}

export default App
