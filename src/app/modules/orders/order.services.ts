import { Torders } from './order.interface';
import { OrderModel } from './order.model';

const createOrderinDb = (payload: Torders) => {
  const result = OrderModel.create(payload);
  return result;
};
const getAllOrdersfromDb = (payload: string | null) => {
  if (payload) {
    const result = OrderModel.find({
      email: { $regex: payload, $options: 'i' },
    });
    return result;
  } else {
    const result = OrderModel.find();
    return result;
  }
};

export const orderServices = {
  createOrderinDb,
  getAllOrdersfromDb,
};
