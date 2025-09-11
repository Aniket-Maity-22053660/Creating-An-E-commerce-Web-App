import React from 'react'
import { assets } from '../../assets/assets.js'
import './Add.css'

const Add = ()=>{
    return(
        <div className='add'>
            <form >
                <div className='add-img-upload flex-col'>
                    <p>Upload Image</p>
                    <label htmlFor='picture'>
                        <img src={assets.upload_area} alt=''/>
                    </label>
                    <input type='file' id='picture' name='picture' hidden required/>
                </div>
                <div className='add-product-name flex-col'>
                    <p>Product Name</p>
                    <input type='text' name='name' placeholder='Type Here' />
                </div>
                <div className='add-product-description flex-col'>
                    <p>Product Description</p>
                    <textarea name='description' row='6' placeholder='Write Content Here' required>

                    </textarea>
                </div>
                <div className='add-category-price'>
                    <div className='add-category flex-col'>
                        <p>Product Category</p>
                        <select name='category'>
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
                        <input type='Number' name='price' placeholder='$20' />
                    </div>
                </div>
                <button type='submit' className='add-button flex-col'>ADD</button>
            </form>
        </div>
    )
}

export default Add