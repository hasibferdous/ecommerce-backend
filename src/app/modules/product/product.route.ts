import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

router.post('/create-product', ProductControllers.createProduct);
router.get('/', ProductControllers.getAllProducts);
router.get('/:productId', ProductControllers.getSingleProduct);
// PUT /api/products/:productId
router.put('/:productId', ProductControllers.updateProduct);
router.delete('/:productId', ProductControllers.deleteProduct);
router.get('/searchTerm=', ProductControllers.searchProducts);

export const ProductRoutes = router;
