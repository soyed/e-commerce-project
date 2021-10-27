import { combineReducers } from 'redux';
import cartReducer from './Cart/cartReducer';
import categoryReducer from './Category/categoryReducer';
import productsReducer from './Products/productsReducer';

const reducers = combineReducers({
  cart: cartReducer,
  category: categoryReducer,
  products: productsReducer,
});

export default reducers;
