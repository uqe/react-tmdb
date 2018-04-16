import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import * as moviesReducers from './movies';
import * as genresReducers from './genres';
import * as favoritesReducers from './favorites';

const rootReducer = combineReducers({ ...moviesReducers, ...genresReducers, ...favoritesReducers, router: routerReducer });

export default rootReducer;
