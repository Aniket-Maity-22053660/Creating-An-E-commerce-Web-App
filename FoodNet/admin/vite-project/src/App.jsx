import React from 'react'
import NavBar from './components/navbar/NavBar.jsx'
import SideBar from './components/sidebar/SideBar.jsx'
import { Routes, Route } from 'react-router-dom'
import Add from './pages/Add/Add.jsx'
import List from './pages/List/List.jsx'
import Orders from './pages/Orders/Orders.jsx'

import './index.css'

const App = ()=>{

  return (
  <div>
    <NavBar />
    <hr />
    <div className='app-content'>
      <SideBar/>
      <Routes>
        <Route path='/add' element={<Add />}/>
        <Route path='/list' element={<List />}/>
        <Route path='/order' element={<Orders />} />
      </Routes>
    </div>
  </div>
  )
}

export default App
