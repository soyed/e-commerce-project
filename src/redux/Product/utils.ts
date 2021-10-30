import { getProductsById } from '../../services/API/API';
import { STATUS } from '../Category/utils';
import { parseFetchedProducts, productParser } from '../Products/utils';
import { productFailed, productStatus } from './productActionCreators';

// fetch product
export const fetchProduct = (productId: string, categoryId: string) => {
  return function (dispatch: any) {
    dispatch(productStatus(STATUS.LOADING));
    getProductsById(productId, true)
      .then((product: Response) => {
        console.log(product);
        const { product, similarProducts } = product;
        const parsedProduct = productParser(product, categoryId);
        const parsedSimilarProducts = productParser(
          similarProducts,
          categoryId
        );
        console.log(parsedProduct);
        console.log(parsedSimilarProducts);
        // parse the product information and similar products as well
        dispatch(productStatus(STATUS.IDLE));
      })
      .catch((error) => {
        // Dispatch action for error
        console.log(error);
        dispatch(productFailed('Error - Failed to fetch the product'));
        dispatch(productStatus(STATUS.FAILED));
      });
  };
};
