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


  const getOrder = async (req: Request, res: Response) => {
    try {
      const email = req.query.email as string;
  
      const orderResult= await OrderServices.getOrderFromDB(email ?? '');
  
      return res.status(200).json({
        success: true,
        message: email
          ? 'Orders fetched successfully for user email!'
          : 'Orders fetched successfully!',
        data: orderResult,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'Failed to fetched orders!',
        error: error,
      });
    }
  };





  export const OrderControllers = {
    createOrder,
    getAllOrders,
    getOrder
    
  };
  