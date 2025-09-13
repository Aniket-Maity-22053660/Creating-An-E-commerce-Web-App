import userModel from '../models/userModels.js'

const addToCart = async (req, res)=>{
    let userData = await userModel.findOne({_id:req.userId})
    let cartData = await userData.cartData

    try{
    if(!cartData[req.body.itemId]){
        cartData[req.body.itemId] = 1
    }else{
        cartData[req.body.itemId] += 1;
    }
    await userModel.findByIdAndUpdate(req.userId, {cartData})
    return res.json({success:true, message:"Added To Cart!"})
    }catch(e){
        console.log(e)
        res.json({success:false, message:"Error!"})
    }
}

const removeFromCart = (req, res)=>{
    
}

const listCart = (req, res)=>{

}

export {addToCart, removeFromCart, listCart}