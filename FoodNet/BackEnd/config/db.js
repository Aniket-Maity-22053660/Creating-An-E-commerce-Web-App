import mongoose from "mongoose"

export const connectDB = async ()=>{
    try{
    (await mongoose.connect("mongodb+srv://22053660_db_user:%23KingStar%23@cluster0.1uwlxoz.mongodb.net/foodnet"));
    console.log("DB connected!")
    }catch(e){
        console.log("DB connection failed!")
    }

}