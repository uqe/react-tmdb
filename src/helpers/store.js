import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { save, load } from 'redux-localstorage-simple';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();
const reduxRouter = routerMiddleware(history);
const favorite = { states: ['favorites'], namespace: 'tmdb' };

const productionStore = () => {
  const middlewares = [thunkMiddleware, reduxRouter, save(favorite)];
  const store = createStore(rootReducer, load(favorite), applyMiddleware(...middlewares));

  return store;
};

const developmentStore = () => {
  const { createLogger } = require('redux-logger');
  const loggerMiddleware = createLogger();
  const middlewares = [thunkMiddleware, reduxRouter, loggerMiddleware, save(favorite)];
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer, load(favorite), composeEnhancers(applyMiddleware(...middlewares)));

  return store;
};

export const store = process.env.NODE_ENV === 'production' ? productionStore() : developmentStore();
