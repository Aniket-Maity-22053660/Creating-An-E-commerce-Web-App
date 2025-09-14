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

    console.log(req)
    return res.json({success:true, message:"Added To Cart!"})
    }catch(e){
        console.log(e)
        res.json({success:false, message:"Error!"})
    }
}

const removeFromCart = async (req, res)=>{
    try{
    let userData = await userModel.findById(req.userId)
    let cartData = await userData.cartData

    if(!req.body.all){
    if (cartData[req.body.itemId] > 0) {
    // decrement by 1
    cartData[req.body.itemId] -= 1
    await userModel.findByIdAndUpdate(req.userId, {cartData})
    } else {
    return res.json({ success: false, message: "Item not found!" });
    }
    }else{
        if(cartData[req.body.itemId] > 0){
            cartData[req.body.itemId] = 0
            await userModel.findByIdAndUpdate(req.userId, {cartData})
        }else{
            return res.json({success:false, message:"Item not found!"})
        }
    }
    }catch(e){
        console.log(e)
        return res.json({success:false, message:"Error!"})
    }
}

const listCart = async (req, res)=>{
    try{
        let userData = await userModel.findById(req.userId)
        let cartData = await userData.cartData
        if(cartData){
            return res.json({success:true, cartData})
        }else{
            return res.json({success:false, message:"No items were found!"})
        }
    }catch(e){
        console.log(e)
        return res.json({success:false, message:"Error!"})
    }
}

export {addToCart, removeFromCart, listCart}