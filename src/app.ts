import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRoutes } from './app/modules/product/product.route';
import { OrderRoutes } from './app/modules/order/order.route';

const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// application routers
app.use('/api/products', ProductRoutes);
app.use('/api/orders', OrderRoutes);

// test route to check if server is running
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the E-commerce Backend ! Have a good day.');
});

// Middleware to catch 404 errors (Route not found)
app.use((req: Request, res: Response, next) => {
  res.status(404).json({
    error: 'Route not found',
  });
});

export default app;
