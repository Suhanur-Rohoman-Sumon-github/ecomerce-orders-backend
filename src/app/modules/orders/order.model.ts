import mongoose, { Schema } from 'mongoose';
import { Torders } from './order.interface';
import ProductModel from '../products/product.models';
import { ObjectId } from 'mongodb';

const orderSchema = new Schema<Torders>({
  email: { type: String, required: true },
  productId: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

orderSchema.pre('save', async function (next) {
  // Find the product by ID
  const product = await ProductModel.findById(new ObjectId(this.productId));

  if (!product) {
    throw new Error('Product not found');
  }

  // Calculate the new inventory quantity
  const newValue = product.inventory.quantity - this.quantity;
  if (product.inventory.quantity < this.quantity) {
    await ProductModel.updateOne(
      { _id: new ObjectId(this.productId) },
      {
        $set: { 'inventory.inStock': false },
      },
    );
    return next(new Error('Insufficient quantity available in inventory'));
  }
  // Update the product's inventory quantity
  await ProductModel.updateOne(
    { _id: new ObjectId(this.productId) },
    {
      $set: { 'inventory.quantity': newValue },
    },
  );

  next();
});

export const OrderModel = mongoose.model('Order', orderSchema);
