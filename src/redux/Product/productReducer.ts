import { STATUS } from '../Category/utils';
import productActions from './productActions';

const initialState = {
  status: STATUS.IDLE,
  errorMessage: ' ',
  products: [],
};

const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case productActions.FETCH_PRODUCT:
      return { ...state, products: action.payload.products };
    case productActions.PRODUCT_STATUS:
      return { ...state, status: action.payload.status };
    case productActions.PRODUCT_FAILED:
      return { ...state, errorMessage: action.payload.errorMessage };
    default:
      return state;
  }
};

export default productReducer;
