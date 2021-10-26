import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleWare from 'redux-thunk';
import { fetchCategories } from './Category/categoryReducer';
import rootReducer from './rootReducer';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleWare));

const store = createStore(rootReducer, composedEnhancer);

export default store;
