import { configureStore } from '@reduxjs/toolkit';
import CartReducer from './Cart/Cart';

const store = configureStore({ reducer: { cart: CartReducer } });

export default store;
