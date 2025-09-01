import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/header/Header.jsx'
import Menu from '../../components/menu/Menu.jsx'
const Home = ()=>{
    const [category, setCategory] = useState("all")

    return (
        <>
        <Header />
        <Menu category={category} setCategory={setCategory} />
        </>
    )
}

export default Home