import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets.js'
import axios from 'axios'
import { toast } from 'react-toastify' 
import './Add.css'


const Add = ()=>{
    const [image, setImage] = useState(null)   

    useEffect(()=>{
        console.log(image)
    }, [image])

    const [data, setData] = useState({
        name:"",
        description:"",
        price:"",
        category:"Salad"
    })

    useEffect(()=>{
        console.log(data)
    }, [data])
    const onChangeHandler = (event)=>{
        console.log(event)
        const name = event.target.name
        const value = event.target.value
        //setImage((prev)=>{return {...prev, [name] : value}})
        setData((prev)=>{return {...prev, [name]:value}})
    }

    const onSubmitHandler = async (event)=>{
        const url = 'http://localhost:4000'
        event.preventDefault()
        console.log(event)
        const formData = new FormData()
        formData.append("name", data.name)
        formData.append("description", data.description)
        formData.append("price", Number(data.price))
        formData.append("category", data.category)
        formData.append("picture", image)
        console.log(formData)
        const response = await axios.post(`${url}/api/food/add`, formData)
        if(response.data.success){
            setData({
                name:"",
                description:"",
                price:"",
                category:"Salad"
            })
            setImage(null)
            toast.success(response.data.message)
        }else{
            toast.error(response.data.message)
        }
    }
    return(
        <div className='add'>
            <form onSubmit={(e)=>onSubmitHandler(e)}>
                <div className='add-img-upload flex-col'>
                    <p>Upload Image</p>
                    <label htmlFor='picture'>
                        <img src={image ? URL.createObjectURL(image):assets.upload_area} alt=''/>
                    </label>
                    <input type='file' onChange={(e)=>setImage(e.target.files[0])}  id='picture' name='picture' hidden required/>
                </div>
                <div className='add-product-name flex-col'>
                    <p>Product Name</p>
                    <input value={data.name} onChange={(e)=>onChangeHandler(e)} type='text' name='name' placeholder='Type Here' />
                </div>
                <div className='add-product-description flex-col'>
                    <p>Product Description</p>
                    <textarea value={data.description} onChange={(e)=>onChangeHandler(e)} name='description' rows='6' placeholder='Write Content Here' required>

                    </textarea>
                </div>
                <div className='add-category-price'>
                    <div className='add-category flex-col'>
                        <p>Category</p>
                        <select value={data.category} onChange={(e)=>onChangeHandler(e)} name='category'>
                            <option value="Salad">Salad</option>
                            <option value="Rolls">Rolls</option>
                            <option value="Desserts">Desserts</option>
                            <option value="Sandwich">Sandwich</option>
                            <option value="Cake">Cake</option>
                            <option value="Pure Veg">Pure Veg</option>
                            <option value="Pasta">Pasta</option>
                            <option value="Noodles">Noodles</option>
                        </select>
                    </div>
                    <div className='add-price flex-col'>
                        <p>Product Price</p>
                        <input value={data.price} onChange={(e)=>onChangeHandler(e)} type='number' name='price' placeholder='$20' />
                    </div>
                </div>
                <button type='submit' className='add-button flex-col'>ADD</button>
            </form>
        </div>
    )
}

export default Add