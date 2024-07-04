import { Schema, model } from 'mongoose';
import { Inventory, Order, Product, Variants } from './product.interface';

const variantsSchema = new Schema<Variants>({
  type: { type: String },
  value: { type: String },
});

const inventorySchema = new Schema<Inventory>({
  quantity: {
    type: Number,
    required: true,
  },
  inStock: Boolean,
});

const productSchema = new Schema<Product>({
  name: { type: String },
  description: { type: String },
  price: { type: Number },
  category: { type: String },
  tags: { type: [String] },
  variants: { type: [variantsSchema], _id:false },
  inventory: { type: inventorySchema, _id:false },
});

const orderSchema = new Schema<Order>({
    email: { type: String },
    productId: { type: String },
    price: { type: Number },
    quantity: { type: Number },
  });



// Index for text search
productSchema.index({ name: 'text', description: 'text' });


export const ProductModel = model<Product>('Product', productSchema,);
