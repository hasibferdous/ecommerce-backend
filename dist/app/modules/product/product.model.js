"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
// variants schema
const variantsSchema = new mongoose_1.Schema({
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
const inventorySchema = new mongoose_1.Schema({
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
const productSchema = new mongoose_1.Schema({
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
        _id: false,
    },
    inventory: {
        type: inventorySchema,
        required: [true, 'Inventory is required'],
        _id: false,
    },
});
// text for search
productSchema.index({ name: 'text', description: 'text', category: 'text' });
exports.ProductModel = (0, mongoose_1.model)('Product', productSchema);
