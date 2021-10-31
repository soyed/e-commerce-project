import { combineReducers } from 'redux';
import cartReducer from './Cart/cartReducer';
import categoryReducer from './Category/categoryReducer';
import productReducer from './Product/productReducer';
import productsReducer from './Products/productsReducer';
import wishlistReducer from './WishList/wishlistReducer';

const reducers = combineReducers({
  cart: cartReducer,
  category: categoryReducer,
  products: productsReducer,
  product: productReducer,
  wishlist: wishlistReducer,
});

export default reducers;
