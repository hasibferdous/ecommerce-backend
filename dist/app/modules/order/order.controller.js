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
exports.OrderControllers = void 0;
const order_service_1 = require("./order.service");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { order: orderData } = req.body;
        const orderResult = yield order_service_1.OrderServices.createOrder(orderData);
        res.status(200).json({
            success: true,
            message: "Order created successfully!",
            data: orderResult,
        });
    }
    catch (err) {
        console.log(err);
    }
});
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderResult = yield order_service_1.OrderServices.getAllOrders();
        res.status(200).json({
            success: true,
            message: "Orders fetched successfully!",
            data: orderResult,
        });
    }
    catch (err) {
        console.log(err);
    }
});
const getOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.query.email;
        const orderResult = yield order_service_1.OrderServices.getOrderFromDB(email !== null && email !== void 0 ? email : '');
        return res.status(200).json({
            success: true,
            message: email
                ? 'Orders fetched successfully for user email!'
                : 'Orders fetched successfully!',
            data: orderResult,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: 'Failed to fetched orders!',
            error: error,
        });
    }
});
exports.OrderControllers = {
    createOrder,
    getAllOrders,
    getOrder
};
