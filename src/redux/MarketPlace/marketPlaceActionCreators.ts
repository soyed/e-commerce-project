import { Product } from '../../components/ProductPage/model';
import { STATUS } from '../Category/utils';

export const marketplaceProducts = (products: Product[]) => {
  return {
    type: marketPlaceAction.FETCH_MARKETPLACE_PRODUCTS,
    payload: { products },
  };
};

export const marketPlaceStatus = (status: STATUS) => {
  return {
    type: marketPlaceAction.MARKETPLACE_PRODUCTS_STATUS,
    payload: { status },
  };
};

export const marketPlaceError = (message: string) => {
  return {
    type: marketPlaceAction.MARKETPLACE_PRODUCTS_STATUS,
    payload: { message },
  };
};
