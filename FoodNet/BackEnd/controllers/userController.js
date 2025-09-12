import userModel from '../models/userModels.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'


const loginUser = async (req, res)=>{

}

const createToken = (id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET)
}

const registerUser = async (req, res)=>{
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    
    const exists = await userModel.findOne({email})
    try{
    if(exists){
        console.log(exists)
        res.json({success:false, message:"User Already Exists!"})
    }else{
        if(!validator.isEmail(email)){
            res.json({success:false, message:"Please Enter Valid Email!"})
        }else if(password.length < 8){
            res.json({success:false, message:"Please Enter a Strong Password!"})
        }else{
            //hashing user password
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)
            const newUser = new userModel({
                name:name,
                email:email,
                password:hashedPassword
            })
            const user = await newUser.save()
            const token = createToken(user._id)
            res.json({success:true, token})
        }
    }
    }catch(error){
        console.log(error)
        res.send({success:false, message:"Error!"})
    }
}

export {loginUser, registerUser}