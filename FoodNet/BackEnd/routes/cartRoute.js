import express from 'express'
import { addToCart, removeFromCart, listCart } from '../controllers/cartController.js'
import authMiddleware from '../middleware/authMiddleware.js'


const cartRouter = express.Router()

cartRouter.post('/add', authMiddleware, addToCart)
cartRouter.post('/remove', authMiddleware, removeFromCart)
cartRouter.get('/get', authMiddleware, listCart)

export default cartRouter