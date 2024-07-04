import { Request, Response } from 'express';
import { ProductServices } from './product.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const { product: productData } = req.body;
    const result = await ProductServices.createProductIntoDB(productData);

    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductsFromDB();
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const result = await ProductServices.getSingleProductFromDB(productId);

    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteProduct = async (req: Request, res: Response) => {
    try {
      const { productId } = req.params;
  
      const result = await ProductServices.deleteProduct(productId);
  
      res.status(200).json({
        success: true,
        message: "Product deleted successfully!",
        data: null,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        success: false,
        message: 'Error deleting product',
      });
    }
  };

const updateProduct = async (req: Request, res: Response) => {
    try {
      const { productId } = req.params;
      const updatedProduct = req.body;
  
    //   console.log('Update request body:', updatedProduct); // Debugging log
  
      const result = await ProductServices.updateProduct(productId, updatedProduct);
  
      if (result) {
        res.status(200).json({
          success: true,
          message: "Product updated successfully!",
          data: result,
        });
      } else {
        res.status(404).json({
          success: false,
          message: 'Product not found',
        });
      }
    } catch (err) {
      console.error('Error updating product:', err);
      res.status(500).json({
        success: false,
        message: 'Failed to update product',
        // error: err.message,
      });
    }
  };



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
  
const createOrder = async (req: Request, res: Response) => {
    try {
      const { order: orderData } = req.body;
      const OrderResult = await ProductServices.createOrder(orderData);
  
      res.status(200).json({
        success: true,
        message: 'Product created successfully!',
        data: OrderResult,
      });
    } catch (err) {
      console.log(err);
    }
  };



export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
//   searchProducts
createOrder
};
