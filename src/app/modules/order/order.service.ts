import { ProductServices } from '../product/product.service';
import { TOrder } from './order.interface';
import { Order } from './order.model';

// add new order and update quantity
const addNewOrderToDB = async (order: TOrder) => {
  // get single product
  const getSingleProductFromDB = await ProductServices.getSingleProductFromDB(
    String(order?.productId),
  );

  if (!getSingleProductFromDB) {
    throw new Error('Order not found');
  }

  const availableQuantity: number = <number>(
    getSingleProductFromDB?.inventory?.quantity
  );

  if (availableQuantity <= 0 || order?.quantity > availableQuantity) {
    throw new Error('Insufficient quantity available in inventory');
  } else {
    const newAvailableQuantity: number =
      <number>availableQuantity - order?.quantity;

    let updatedProduct;
    if (newAvailableQuantity > 0) {
      updatedProduct = {
        inventory: {
          quantity: newAvailableQuantity,
          inStock: true,
        },
      };
    } else {
      updatedProduct = {
        inventory: {
          quantity: newAvailableQuantity,
          inStock: false,
        },
      };
    }
    // update the quantity
    await ProductServices.updateProductIntoDB(
      String(order.productId),
      updatedProduct,
    );

    // create new order
    const result = await Order.create(order);
    return result;
  }
};

// get all orders
const getAllOrdersFromDB = async () => {
  const result = await Order.find();
  return result;
};

// get orders by email
const getAllOrdersByEmailFromDB = async (email: string) => {
  const result = await Order.find({ email });
  return result;
};

export const OrderServices = {
  addNewOrderToDB,
  getAllOrdersFromDB,
  getAllOrdersByEmailFromDB,
};
