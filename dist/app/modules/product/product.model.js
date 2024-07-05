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
    inStock: Boolean,
});
const productSchema = new mongoose_1.Schema({
    name: { type: String },
    description: { type: String },
    price: { type: Number },
    category: { type: String },
    tags: { type: [String] },
    variants: { type: [variantsSchema], _id: false },
    inventory: { type: inventorySchema, _id: false },
});
exports.ProductModel = (0, mongoose_1.model)('Product', productSchema);
