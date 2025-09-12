import userModel from '../models/userModels.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'


const loginUser = async (req, res)=>{
    
    try{
        const {email, password} = req.body
        console.log(req.body)
        if (!email || !password) {
            return res.status(400).json({ success: false, message: 'Email and password are required' })
        }
        const user = await userModel.findOne({email})

        if(!user){
            res.json({success:false, message:"User does not exist!"})
        }else{
            const isMatch = await bcrypt.compare(password, user.password)
            if(!isMatch){
                res.json({success:false, message:"Invalid credentials!"})
            }else{
                const token = createToken(user._id)
                res.json({success:true, token:token, message:"Logged In Successfully!"})
            }
        }
    }catch(e){
        console.log(e)
        res.json({success:false, message:"Error!"})
    }
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
            res.json({success:true, token, message:"Signed In Successfully!"})
        }
    }
    }catch(error){
        console.log(error)
        res.json({success:false, message:"Error!"})
    }
}

export {loginUser, registerUser}