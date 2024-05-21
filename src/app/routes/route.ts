import  { Router } from 'express'
import { ProductRouter } from "../modules/products/product.route";

const router = Router()

const moduleRoutes = [
    {
        path: '/product',
        route: ProductRouter,
      },
]

moduleRoutes.forEach(routes => router.use(routes.path, routes.route))

export default router