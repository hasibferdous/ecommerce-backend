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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderControllers = void 0;
const order_validation_1 = __importDefault(require("./order.validation"));
const order_service_1 = require("./order.service");
// create new order controller
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderData = req.body;
        const zodParseData = order_validation_1.default.parse(orderData);
        const result = yield order_service_1.OrderServices.addNewOrderToDB(zodParseData);
        res.status(200).json({
            success: true,
            message: 'Order created successfully!',
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message || 'Something went wrong',
            error: error,
        });
    }
});
// get all orders controller
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let result;
        const { email } = req.query;
        if (email) {
            result = yield order_service_1.OrderServices.getAllOrdersByEmailFromDB(email);
        }
        else {
            result = yield order_service_1.OrderServices.getAllOrdersFromDB();
        }
        res.status(200).json({
            success: true,
            message: email
                ? 'Orders fetched successfully for user email!'
                : 'Orders fetched successfully!',
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message || 'Something went wrong',
            error: error,
        });
    }
});
exports.OrderControllers = {
    createOrder,
    getAllOrders,
};
