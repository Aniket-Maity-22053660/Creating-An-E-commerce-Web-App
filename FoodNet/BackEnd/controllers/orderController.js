import orderModel from '../models/orderModels.js'
import userModel from    '../models/userModels.js'
import Stripe from 'stripe'

//Placing user order from frontend

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const placeOrder = async(req,  res)=>{
    const frontEnd = 'http://localhost:5174'
    try{
        const newOrder = new orderModel({
            userId: req.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address,
        })
        await newOrder.save()
        await userModel.findByIdAndUpdate(req.userId, {cartData:{}})
        const line_items = req.body.items.map((item, index)=>(
            {
                price_data:{
                    currency:"inr",
                    product_data:{
                        name:item.name
                    },
                    unit_amount:Math.round(Number(item.price) * 80)
                },
                quantity:item.quantity
            }
        )
    )
    line_items.push({
        price_data:{
            currency:"inr",
            product_data:{
                name:"Delivery Charges"
            },
            unit_amount: 2 * 80
        },
        quantity:1
    })

    const session = await stripe.checkout.sessions.create({
        line_items:line_items,
        mode:'payment',
        success_url:`${frontEnd}/verify?success=true&orderId=${newOrder._id}`,
        cancel_url:`${frontEnd}/verify?success=false&orderId=${newOrder._id}`
    })
    return res.json({success:true, session_url:session.url})
    }catch(e){
        console.log(e)
        return res.json({success:false, message:'Error'})
    }
}

export { placeOrder }