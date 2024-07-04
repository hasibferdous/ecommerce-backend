import { Request, Response } from 'express';
import { OrderServices } from "./order.service";

const createOrder = async (req: Request, res: Response) => {
    try {
      const { order: orderData } = req.body;
      const orderResult = await OrderServices.createOrder(orderData);
  
      res.status(200).json({
        success: true,
        message: "Order created successfully!",
        data: orderResult,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getAllOrders = async (req: Request, res: Response) => {
    try {
      const orderResult = await OrderServices.getAllOrders();
      res.status(200).json({
        success: true,
        message: "Orders fetched successfully!",
        data: orderResult,
      });
    } catch (err) {
      console.log(err);
    }
  };



  export const OrderControllers = {
    createOrder,
    getAllOrders
  };
  