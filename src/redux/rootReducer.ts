import { combineReducers } from 'redux';
import cartReducer from './Cart/cartReducer';
import categoryReducer from './Category/categoryReducer';
import marketPlaceReducer from './MarketPlace/marketPlaceReducer';
import productReducer from './Product/productReducer';
import productsReducer from './Products/productsReducer';
import usersReducer from './Users/usersReducer';
import wishlistReducer from './WishList/wishlistReducer';

const reducers = combineReducers({
  cart: cartReducer,
  category: categoryReducer,
  products: productsReducer,
  product: productReducer,
  wishlist: wishlistReducer,
  users: usersReducer,
});

export default reducers;
