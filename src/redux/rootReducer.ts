import { combineReducers } from 'redux';
import cartReducer from './Cart/cartReducer';

const reducers = combineReducers({ cart: cartReducer });

export default reducers;
