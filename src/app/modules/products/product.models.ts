import mongoose, { Schema } from "mongoose";
import { Tproducts } from "./product.interface";

const productSchema = new Schema<Tproducts>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    tags: { type: [String], required: true },
    variant: [
      {
        type: {
          type: String, required: true
        },
        value: {
          type: String, required: true
        }
      }
    ],
    inventory: {
      quantity: { type: Number, required: true },
      inStock: { type: Boolean, required: true }
    }
  });
  
  const ProductModel = mongoose.model('Product', productSchema);

  export default ProductModel

