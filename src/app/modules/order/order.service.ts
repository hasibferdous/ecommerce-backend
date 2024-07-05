import { Order } from "./order.interface";
import orderModel from "./order.model";




const createOrder = async (order: Order) => {
    const orderResult = await orderModel.create(order);
    return orderResult;
  };

  const getAllOrders = async () => {
    const orderResult = await orderModel.find();
    return orderResult;
  };


  const getOrderFromDB = async (email: string) => {
    if (email) {
      const orderResult = await orderModel.find({ email });
      return orderResult;
    } else {
      const orderResult = await orderModel.find();
      return orderResult;
    }
  };
  



  export const OrderServices = {
    createOrder,
    getAllOrders,
    getOrderFromDB
    
  };