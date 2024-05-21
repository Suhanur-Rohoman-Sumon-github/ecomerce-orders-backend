import express from 'express'
import { productsControllers } from './product.controllers'

const router = express.Router()

router.post('/',productsControllers.createProducts)

export const ProductRouter = router