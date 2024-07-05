import { TProduct } from './product.interface';
import { ProductModel } from './product.model';

// create a product service
const createProductIntoDB = async (product: TProduct) => {
  const result = await ProductModel.create(product);
  return result;
};

// get all product service
const getAllProductsFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};

// get single product service
const getSingleProductFromDB = async (_id: string) => {
  const result = await ProductModel.findOne({ _id });
  return result;
};

// update a product service
const updateProductIntoDB = async (id: string, product: Partial<TProduct>) => {
  const result = await ProductModel.findByIdAndUpdate(id, product, {
    new: true,
  });
  return result;
};

// delete a product service
const deleteProductFromDB = async (id: string) => {
  const result = await ProductModel.findByIdAndDelete(id);
  return result;
};

// search product service
const getSearchedProductFromDB = async (searchTerm: string) => {
  const result = await ProductModel.find({
    $text: { $search: searchTerm },
  });
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateProductIntoDB,
  deleteProductFromDB,
  getSearchedProductFromDB,
};
