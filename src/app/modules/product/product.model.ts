import { Schema, model } from 'mongoose';
import { Inventory, Product, Variants } from './product.interface';

const variantsSchema = new Schema<Variants>({
  type: { type: String },
  value: { type: String },
});

const inventorySchema = new Schema<Inventory>({
  quantity: {
    type: Number,
    required: true,
  },
  inStock: ['true', 'false'],
});

const productSchema = new Schema<Product>({
  id: { type: String },
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  category: { type: String },
  tags: { type: [String] },
  variants: variantsSchema,
  inventory: inventorySchema,
});

export const ProductModel = model<Product>('Product', productSchema);
