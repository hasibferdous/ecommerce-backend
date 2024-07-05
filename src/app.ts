import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { ProductRoutes } from './app/modules/product/product.route';
import { OrderRoutes } from './app/modules/order/order.route';

const app: Application = express();
//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/products', ProductRoutes);
app.use('/api/orders', OrderRoutes);

const getAController = (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
};

// Middleware to catch 404 errors (Route not found)
app.use((req: Request, res: Response, next) => {
  res.status(404).json({
    error: 'Route not found',
  });
});

app.get('/', getAController);

export default app;
