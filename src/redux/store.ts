import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleWare from 'redux-thunk';
import { fetchCategories } from './Category/utils';
import rootReducer from './rootReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'persistedStore',
  storage,
  // blacklist and whitelist a reducer
  whitelist: ['cart', 'wishlist'],
};

// enhancers and middleware
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleWare));

// Persisted Reducer -> store the state of reducers
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composedEnhancer);
// persisted redux-store
const persistor = persistStore(store);
// store.dispatch(fetchCategories);
export { store, persistor };
