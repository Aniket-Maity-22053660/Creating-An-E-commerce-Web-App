import autocannon from 'autocannon'

const urls = ["http://localhost:4000", "http://localhost:4000/api/food/add", "http://localhost:4000//localhost:4000/api/food/list", "http://localhost:4000/api/food/remove" ,"http://localhost:4000/api/user/register", "http://localhost:4000/api/user/login", "http://localhost:4000/api/cart/add", "http://localhost:4000/api/cart/remove", "http://localhost:4000/api/cart/get", "http://localhost:4000/api/order/place", "http:localhost:4000/api/order/verify", "http:localhost:4000/api/order/user-orders", "http://localhost:4000/api/order/list-user-orders", "http://localhost:4000/api/order/status-update" ]
const duration = 30

urls.forEach(url=>{
const instance = autocannon({
    url,
    duration,
},
(err, result)=>{
    if(err){
        console.error('Error:', err)
    }else{
        console.log(`URL: ${url}`)
        console.log("Result:", result.requests.total)
        console.log("Duration: ", result.duration)
    }
})
autocannon.track(instance)
})

