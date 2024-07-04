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
  inStock: Boolean,
});

const productSchema = new Schema<Product>({
  name: { type: String },
  description: { type: String },
  price: { type: Number },
  category: { type: String },
  tags: { type: [String] },
  variants: { type: [variantsSchema] },
  inventory: { type: inventorySchema },
});

export const ProductModel = model<Product>('Product', productSchema);
