import mongoose, { Schema } from "mongoose";
import { Torders } from "./order.interface";

const orderSchema = new Schema<Torders>({
    email: { type: String, required: true },
    productId: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
   
})

export const OrderModel = mongoose.model('Order', orderSchema);