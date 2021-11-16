import { STATUS } from '../Category/utils';
import marketPlaceAction from './marketPlaceActions';

const initialState = {
  products: [],
  status: STATUS.IDLE,
  message: '',
};

const marketPlaceReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case marketPlaceAction.MARKETPLACE_PRODUCTS_STATUS:
      return { ...state, status: action.payload.status };
    case marketPlaceAction.MARKETPLACE_PRODUCTS_FAILED:
      return { ...state, message: action.payload.message };
    case marketPlaceAction.FETCH_MARKETPLACE_PRODUCTS:
      return { ...state, products: action.payload.products };

    default:
      return state;
  }
};

export default marketPlaceReducer;
