import { Product } from '../../components/ProductPage/model';
import { STATUS } from '../Category/utils';
import productActions from './productActions';

export const fetchingProducts = (product: Product) => {
  return { type: productActions.FETCH_PRODUCT, payload: { product } };
};

export const productStatus = (status: STATUS) => {
  return { type: productActions.PRODUCT_STATUS, payload: { status } };
};

export const productFailed = (message: string) => {
  return { type: productActions.PRODUCT_FAILED, payload: { message } };
};

// TODO: Add product to Cart and Like products
