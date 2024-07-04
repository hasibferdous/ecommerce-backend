import mongoose from 'mongoose';
import { Product } from './product.interface';
import { ProductModel } from './product.model';

const createProductIntoDB = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};

const getAllProductsFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};

const getSingleProductFromDB = async (_id: string) => {
  const result = await ProductModel.findOne({ _id });
  return result;
};

const updateProduct = async (
  _id: string,
  updatedProduct: Partial<Product>,
): Promise<Product | null> => {
  try {
    const result = await ProductModel.findByIdAndUpdate(
      new mongoose.Types.ObjectId(_id),
      updatedProduct,
      { new: true, runValidators: true },
    );
    return result;
  } catch (error) {
    console.error('Error in updateProduct service:', error);
    throw error;
  }
};

const deleteProduct = async (_id: string): Promise<Product | null> => {
  const result = await ProductModel.findByIdAndDelete(_id);
  return result;
};

const searchProductsInDB = async (name: string): Promise<Product[]> => {
  const result = await ProductModel.find({
    $text: { $search: name },
  });

  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateProduct,
  deleteProduct,
  searchProductsInDB,
};
