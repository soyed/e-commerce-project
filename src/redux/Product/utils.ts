import { getProductsById } from '../../services/API/API';
import { STATUS } from '../Category/utils';
import { parseFetchedProducts, categoryProductParser } from '../Products/utils';
import {
  fetchingProduct,
  productFailed,
  productStatus,
} from './productActionCreators';

// fetch product
export const fetchProduct = (productId: string, categoryId: string) => {
  return async function (dispatch: any) {
    try {
      dispatch(productStatus(STATUS.LOADING));
      const response = await getProductsById(productId, true);
      const responseData = await response.json();
      const { product, similarProducts } = responseData;
      const parsedProduct = categoryProductParser(product, categoryId)[0];
      const parsedSimilarProducts = categoryProductParser(
        similarProducts,
        categoryId
      );
      parsedProduct.similarProducts = parsedSimilarProducts;
      dispatch(fetchingProduct(parsedProduct));
      dispatch(productStatus(STATUS.IDLE));
    } catch (error) {
      // Dispatch action for error
      console.log(error);
      dispatch(productFailed('Error - Failed to fetch the product'));
      dispatch(productStatus(STATUS.FAILED));
    }
  };
};
