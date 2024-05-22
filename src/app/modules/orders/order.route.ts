import express from 'express';
import { orderController } from './order.controller';
const router = express.Router();

router.post('/', orderController.createProducts);
router.get('/', orderController.geAllorders);

export const OrderRouter = router;
