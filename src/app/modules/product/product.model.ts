import { Schema, model } from 'mongoose';
import { Inventory, TProduct, Variants } from './product.interface';

// variants schema
const variantsSchema = new Schema<Variants>({
  type: {
    type: String,
    required: [true, 'Type is required'],
    trim: true,
  },
  value: {
    type: String,
    required: [true, 'Value is required'],
    trim: true,
  },
});

// inventory schema
const inventorySchema = new Schema<Inventory>({
  quantity: {
    type: Number,
    minLength: [0, 'Min quantity is 0. But got {VALUE}'],
    required: [true, 'Quantity is required'],
  },
  inStock: {
    type: Boolean,
    required: [true, 'In stock is required'],
  },
});

// product schema
const productSchema = new Schema<TProduct>({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true,
    minLength: [15, 'Min length is 15. But got {VALUE}'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    trim: true,
    min: [5, 'Min price is 5. But got {VALUE}'],
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    trim: true,
  },
  tags: {
    type: [String],
    required: [true, 'Tags are required'],
  },
  variants: {
    type: [variantsSchema],
    required: [true, 'Variants are required'],
    _id: false

  },
  inventory: {
    type: inventorySchema,
    required: [true, 'Inventory is required'],
    _id: false
  },
});

// text for search
productSchema.index({ name: 'text', description: 'text', category: 'text' });

export const ProductModel = model<TProduct>('Product', productSchema);
