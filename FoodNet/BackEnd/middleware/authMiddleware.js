import jwt from 'jsonwebtoken'

const authMiddleware = (req, res, next) => {
    const {token} = req.headers
    if(!token){
        return res.json({success:false, message:"Not Authorized Login!"})
    }else{
        try{
            const token_decode = jwt.verify(token, process.env.JWT_SECRET)
            req.userId = token_decode.id
            
            next()
        }catch(e){
            console.log(e)
            return res.json({success:false, message:"Error"})
        }
    }
}

export default authMiddleware