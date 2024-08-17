import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

// to create product
router.post('/', ProductControllers.createProduct);

// to retrieve all product
router.get('/', ProductControllers.getAllProducts);

// to get single product
router.get('/:productId', ProductControllers.getSingleProduct);

// to update any product
router.put('/:productId', ProductControllers.updateProductById);

// to delete any product
router.delete('/:productId', ProductControllers.deleteSingleProduct);

export const ProductRoutes = router;
