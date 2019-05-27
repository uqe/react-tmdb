import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { save, load } from 'redux-localstorage-simple';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import rootReducer from '../reducers';

const history = createHistory();
const reduxRouter = routerMiddleware(history);
const settings = { states: ['genres', 'favorites'], namespace: 'tmdb' };

const productionStore = () => {
  const middlewares = [thunkMiddleware, save(settings)];
  const store = createStore(rootReducer, load(settings), applyMiddleware(...middlewares));

  return store;
};

const developmentStore = () => {
  const { createLogger } = require('redux-logger');
  const loggerMiddleware = createLogger();
  const middlewares = [thunkMiddleware, loggerMiddleware, save(settings)];
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer, load(settings), composeEnhancers(applyMiddleware(...middlewares)));

  return store;
};

export const store = process.env.NODE_ENV === 'production' ? productionStore() : developmentStore();
