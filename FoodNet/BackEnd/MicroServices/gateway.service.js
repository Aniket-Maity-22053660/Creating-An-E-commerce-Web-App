import express from 'express'
import morgan from 'morgan'
import proxy from 'express-http-proxy'

const app = express()
const port = 4001

app.use('/stress-test', proxy('http://localhost:4002'))
app.use('/index', proxy('http://localhost:4003'))

app.listen(port, ()=>{
    console.log('gateway service is running on http://localhost:4001')
})


