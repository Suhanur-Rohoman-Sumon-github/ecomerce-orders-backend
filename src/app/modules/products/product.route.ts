import express from 'express';
import { productsControllers } from './product.controllers';

const router = express.Router();

router.post('/', productsControllers.createProducts);
router.get('/', productsControllers.geAllProducts);
router.get('/:productId', productsControllers.getSingleProducts);
router.delete('/:productId', productsControllers.deleteProducts);
router.put('/:productId', productsControllers.updateProducts);

export const ProductRouter = router;
