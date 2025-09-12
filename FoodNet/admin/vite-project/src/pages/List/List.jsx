import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios'
import { toast } from 'react-toastify'

const List = ()=>{

    const url = "http://localhost:4000"
    const [list, setList] = useState([])

    const fetchList = async ()=>{
        const response = await axios.get(`${url}/api/food/list`)
        if(response.data.success){
            setList(response.data.data)   
            console.log(response.data.data)         
        }else{
            toast.error(response.data.message)
        }
    }

    const deleteItem = async (id)=>{
        const url = 'http://localhost:4000/api/food/'
        const response = await axios.post(`${url}remove`, {id:id})
        if(response.data.success){
            toast.success(response.data.message)
            setTimeout(()=>window.location.reload(), 5000)
        }else{
            toast.error(response.data.message)
        }
    }

    useEffect(()=>{
        fetchList()
    }, [])
    return (
        
        <div className='list add flex-col'>
            <p className='header'>All Foods List</p>
            
            <div className='list-table'>
                <div className='list-table-format title'>
                    <b>Image</b>
                    <b>Name</b>
                    <b>Category</b>
                    <b>Price</b>
                    <b>Action</b>
                </div>
                <div className='list-table-container'>
                {list.map((item, index)=>{
                    return(
                        <div key={index} className='list-table-format'>
                            <div style={{display:"flex", justifyContent:"center"}}><img src={`${url}/image/`+item.image} alt='image' /></div>
                            <p>{item.name}</p>
                            <p>{item.category}</p>
                            <p>${item.price}</p>
                            <p onClick={()=>deleteItem(item._id)} style={{cursor:'pointer'}}>X</p>
                        </div>
                    )
                })}
                </div>
            </div>
        </div>
    
    )
}

export default List