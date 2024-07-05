"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderServices = void 0;
const product_service_1 = require("../product/product.service");
const order_model_1 = require("./order.model");
// add new order and update quantity
const addNewOrderToDB = (order) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    // get single product
    const getSingleProductFromDB = yield product_service_1.ProductServices.getSingleProductFromDB(String(order === null || order === void 0 ? void 0 : order.productId));
    if (!getSingleProductFromDB) {
        throw new Error('Order not found');
    }
    const availableQuantity = ((_a = getSingleProductFromDB === null || getSingleProductFromDB === void 0 ? void 0 : getSingleProductFromDB.inventory) === null || _a === void 0 ? void 0 : _a.quantity);
    if (availableQuantity <= 0 || (order === null || order === void 0 ? void 0 : order.quantity) > availableQuantity) {
        throw new Error('Insufficient quantity available in inventory');
    }
    else {
        const newAvailableQuantity = availableQuantity - (order === null || order === void 0 ? void 0 : order.quantity);
        let updatedProduct;
        if (newAvailableQuantity > 0) {
            updatedProduct = {
                inventory: {
                    quantity: newAvailableQuantity,
                    inStock: true,
                },
            };
        }
        else {
            updatedProduct = {
                inventory: {
                    quantity: newAvailableQuantity,
                    inStock: false,
                },
            };
        }
        // update the quantity
        yield product_service_1.ProductServices.updateProductIntoDB(String(order.productId), updatedProduct);
        // create new order
        const result = yield order_model_1.Order.create(order);
        return result;
    }
});
// get all orders
const getAllOrdersFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.Order.find();
    return result;
});
// get orders by email
const getAllOrdersByEmailFromDB = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.Order.find({ email });
    return result;
});
exports.OrderServices = {
    addNewOrderToDB,
    getAllOrdersFromDB,
    getAllOrdersByEmailFromDB,
};
