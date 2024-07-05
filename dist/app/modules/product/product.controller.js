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
exports.ProductControllers = void 0;
const product_service_1 = require("./product.service");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { product: productData } = req.body;
        const result = yield product_service_1.ProductServices.createProductIntoDB(productData);
        res.status(200).json({
            success: true,
            message: 'Product created successfully!',
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
});
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_service_1.ProductServices.getAllProductsFromDB();
        res.status(200).json({
            success: true,
            message: 'Products fetched successfully!',
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
});
const getSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductServices.getSingleProductFromDB(productId);
        res.status(200).json({
            success: true,
            message: 'Product fetched successfully!',
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
});
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductServices.deleteProduct(productId);
        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: 'Error deleting product',
        });
    }
});
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const updatedProduct = req.body;
        //   console.log('Update request body:', updatedProduct); // Debugging log
        const result = yield product_service_1.ProductServices.updateProduct(productId, updatedProduct);
        if (result) {
            res.status(200).json({
                success: true,
                message: "Product updated successfully!",
                data: result,
            });
        }
        else {
            res.status(404).json({
                success: false,
                message: 'Product not found',
            });
        }
    }
    catch (err) {
        console.error('Error updating product:', err);
        res.status(500).json({
            success: false,
            message: 'Failed to update product',
            // error: err.message,
        });
    }
});
//   const searchProducts = async (req: Request, res: Response) => {
//     try {
//       const { name } = req.query;
//       if (!name || typeof name !== 'string') {
//         return res.status(400).json({
//           success: false,
//           message: 'Invalid search term provided',
//         });
//       }
//       const result = await ProductServices.searchProductsInDB(name);
//       res.status(200).json({
//         success: true,
//         message: 'Products retrieved successfully',
//         data: result,
//       });
//     } catch (err) {
//       console.error('Error searching products:', err);
//       res.status(500).json({
//         success: false,
//         message: 'Failed to retrieve products',
//         error: err.message,
//       });
//     }
//   };
exports.ProductControllers = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct,
    //   searchProducts
};
