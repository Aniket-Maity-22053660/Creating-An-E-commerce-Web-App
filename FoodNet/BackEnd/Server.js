import "dotenv/config"
import express from 'express'
import cors from 'cors'
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
//Configuring the app

const app = express()
const port = 4000

// middleware

app.use(express.json())
app.use(cors())
app.use('/image', express.static('uploads'))
//Connecting DB

connectDB()

// APPI endpoint
app.use('/api/food', foodRouter)
app.use('/api/user', userRouter)

app.get('/', (req, res)=>{
    res.send("You are seeing this from the BackEnd")
})

app.listen(port, ()=>{
    console.log(`Server started on http://localhost:${port}`)
})

//mongodb+srv://22053660_db_user:<db_password>@cluster0.1uwlxoz.mongodb.net/?