import { Request, Response } from 'express';
import { ProductServices } from './product.service';
import productValidationSchema from './product.validation';

// create new product controller
const createProduct = async (req: Request, res: Response) => {
  try {
    const { product: productData } = req.body;
    // zod validation
    const zodParseData = productValidationSchema.parse(productData);

    const result = await ProductServices.createProductIntoDB(zodParseData);

    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

// get all products controller
const getAllProducts = async (req: Request, res: Response) => {
  try {
    let result;
    // to search product
    const { searchTerm } = req.query;
    if (searchTerm) {
      result = await ProductServices.getSearchedProductFromDB(
        searchTerm as string,
      );
    } else {
      result = await ProductServices.getAllProductsFromDB();
    }

    res.status(200).json({
      success: true,
      message: searchTerm
        ? `Products matching search term '${searchTerm}' fetched successfully!`
        : 'Products fetched successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || 'Something went wrong',
      error: error,
    });
  }
};

// get single product controller
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.getSingleProductFromDB(productId);

    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || 'Something went wrong',
      error: error,
    });
  }
};

// update product controller
const updateProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const productData = req.body;
    const result = await ProductServices.updateProductIntoDB(
      productId,
      productData,
    );

    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || 'Something went wrong',
      error: error,
    });
  }
};

// delete product controller
const deleteSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    await ProductServices.deleteProductFromDB(productId);

    res.status(200).json({
      success: true,
      message: 'Product deleted successfully!',
      data: null,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || 'Something went wrong',
      error: error,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProductById,
  deleteSingleProduct,
};
