import { combineReducers } from 'redux';
import cartReducer from './Cart/cartReducer';
import categoryReducer from './Category/categoryReducer';

const reducers = combineReducers({
  cart: cartReducer,
  category: categoryReducer,
});

export default reducers;
