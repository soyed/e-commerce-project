import { STATUS } from '../Category/utils';
import productsActions from './productsActions';

export const productsStatus = (status: STATUS) => {
  return {
    type: productsActions.LOADING_CATEGORY_PRODUCTS,
    payload: { status },
  };
};

export const fetchingProducts = (products: any[]) => {
  return {
    type: productsActions.FETCH_CATEGORY_PRODUCTS,
    payload: { products },
  };
};

export const productsFailed = (message: string) => {
  return {
    type: productsActions.FAILED_CATEGORY_PRODUCTS,
    payload: { message },
  };
};
