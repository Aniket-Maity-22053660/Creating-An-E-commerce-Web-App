import React, { useEffect, useState } from 'react'
import './Home.css'
import Header from '../../components/header/Header.jsx'
import Menu from '../../components/menu/Menu.jsx'
import FoodDisplay from '../../components/foodDisplay/FoodDisplay.jsx'
import AppDownload from '../../components/appDownload/AppDownload.jsx'

const Home = ()=>{
    const [category, setCategory] = useState("all")

    useEffect(()=>{
        console.log(category)
    }, [category])
    return (
        <>
        <Header />
        <Menu category={category} setCategory={setCategory} />
        <FoodDisplay category={category}/>
        <AppDownload />
        </>
    )
}

export default Home