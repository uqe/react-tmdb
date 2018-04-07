import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers';

const productionStore = () => {
  const middlewares = [thunkMiddleware];
  const store = createStore(rootReducer, applyMiddleware(...middlewares));

  return store;
};

const developmentStore = () => {
  const { createLogger } = require('redux-logger');
  const loggerMiddleware = createLogger();
  const middlewares = [thunkMiddleware, loggerMiddleware];
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

  return store;
};

export const store = process.env.NODE_ENV === 'production' ? productionStore() : developmentStore();
