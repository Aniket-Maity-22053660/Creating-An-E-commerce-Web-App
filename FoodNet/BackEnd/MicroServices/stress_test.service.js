import express from 'express'
import morgan from 'morgan'

const app = express()
const port = 4002

app.use(morgan('dev'))
app.use(express.json())


app.get('/', (req, res)=>{
for(let i = 0 ; i < 10000 ; i++){
    for(let i = 0 ; i < 10000 ; i++){

    }
}
res.send("Hello World!")
})

app.listen(port, ()=>{
    console.log("stress-test is running on http://localhost:4002")
})
