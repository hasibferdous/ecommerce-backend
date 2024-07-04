import { model, Schema } from 'mongoose';
import { Order } from './order.interface';

const orderSchema = new Schema<Order>({
    email: {
        type: String,
        required: true,
    },
    productId: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
})

const orderModel = model<Order>('Order', orderSchema);

export default orderModel;