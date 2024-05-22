import { Tproducts } from './product.interface';
import ProductModel from './product.models';

const createProductsinDb = (payload: Tproducts) => {
  const result = ProductModel.create(payload);
  return result;
};
const getAllProductsfromDb = (payload: string | null) => {
  if (payload) {
    const result = ProductModel.find({
      name: { $regex: payload, $options: 'i' },
    });
    return result;
  } else {
    const result = ProductModel.find();
    return result;
  }
};
const getSingleProductsfromDb = (id: string) => {
  const result = ProductModel.findOne({ id });
  return result;
};

const deleteProductsfromDb = (id: string) => {
  const result = ProductModel.deleteOne({ id });
  return result;
};

export const productServices = {
  createProductsinDb,
  getAllProductsfromDb,
  getSingleProductsfromDb,
  deleteProductsfromDb,
};
