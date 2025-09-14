import express from 'express'
import { placeOrder, verifyOrder } from '../controllers/orderController.js'
import authMiddleware from "../middleware/authMiddleware.js"



const orderRouter = express.Router()

orderRouter.post('/place',authMiddleware, placeOrder)
orderRouter.post('/verify', verifyOrder)
orderRouter.get('/_ping', (req, res) => res.send('order router alive')); // <— add this
console.log('orderRoute.js loaded');

export default orderRouter