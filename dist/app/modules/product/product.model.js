"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
const variantsSchema = new mongoose_1.Schema({
    type: { type: String },
    value: { type: String },
});
const inventorySchema = new mongoose_1.Schema({
    quantity: {
        type: Number,
        required: true,
    },
    inStock: ['true', 'false'],
});
const productSchema = new mongoose_1.Schema({
    id: { type: String },
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { type: String },
    tags: { type: [String] },
    variants: variantsSchema,
    inventory: inventorySchema,
});
exports.ProductModel = (0, mongoose_1.model)('Product', productSchema);
