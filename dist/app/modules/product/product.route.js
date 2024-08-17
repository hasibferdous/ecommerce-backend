"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
// to create product
router.post('/', product_controller_1.ProductControllers.createProduct);
// to retrieve all product
router.get('/', product_controller_1.ProductControllers.getAllProducts);
// to get single product
router.get('/:productId', product_controller_1.ProductControllers.getSingleProduct);
// to update any product
router.put('/:productId', product_controller_1.ProductControllers.updateProductById);
// to delete any product
router.delete('/:productId', product_controller_1.ProductControllers.deleteSingleProduct);
exports.ProductRoutes = router;
