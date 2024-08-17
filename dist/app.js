"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_route_1 = require("./app/modules/product/product.route");
const order_route_1 = require("./app/modules/order/order.route");
const app = (0, express_1.default)();
// parser
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// application routers
app.use('/api/products', product_route_1.ProductRoutes);
app.use('/api/orders', order_route_1.OrderRoutes);
// test route to check if server is running
app.get('/', (req, res) => {
    res.send('Welcome to the E-commerce Backend ! Have a good day.');
});
// Middleware to catch 404 errors (Route not found)
app.use((req, res, next) => {
    res.status(404).json({
        error: 'Route not found',
    });
});
exports.default = app;
