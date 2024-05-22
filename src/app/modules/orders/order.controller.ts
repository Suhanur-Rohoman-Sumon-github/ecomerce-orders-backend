import { NextFunction, Request, Response } from 'express';
import { orderServices } from './order.services';
import { ordervalidationSchema } from './order.validation';
import ProductModel from '../products/product.models';
import { ObjectId } from 'mongodb';

const createProducts = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const orders = req.body;
    
    const product = await ProductModel.findById(new ObjectId(orders.productId));
    if (product.inventory.quantity < orders.quantity) {
      res.status(200).send({
        "success": false,
        "message": "Insufficient quantity available in inventory"
    });
    }
    const zodParsData = ordervalidationSchema.parse(orders);
    const result = await orderServices.createOrderinDb(zodParsData);

    res.status(200).send({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const geAllorders = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const query = req.query.email as string;
    const allData = null as null;

    if (query) {
      const result = await orderServices.getAllOrdersfromDb(query);
      res.status(200).send({
        success: true,
        message: 'order fetched successfully!',
        data: result,
      });
    } else {
      const result = await orderServices.getAllOrdersfromDb(allData);
      res.status(200).send({
        success: true,
        message: 'Products fetched successfully!',
        data: result,
      });
    }
  } catch (error) {
    next(error);
  }
};

export const orderController = {
  createProducts,
  geAllorders,
};
