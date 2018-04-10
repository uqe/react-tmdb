import { combineReducers } from 'redux';
import * as moviesReducers from './movies';
import * as genresReducers from './genres';

const rootReducer = combineReducers({ ...moviesReducers, ...genresReducers });

export default rootReducer;
