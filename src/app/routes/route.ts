import { Router } from 'express';
import { ProductRouter } from '../modules/products/product.route';
import { OrderRouter } from '../modules/orders/order.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/products',
    route: ProductRouter,
  },
  {
    path: '/orders',
    route: OrderRouter,
  },
];

moduleRoutes.forEach((routes) => router.use(routes.path, routes.route));

export default router;
