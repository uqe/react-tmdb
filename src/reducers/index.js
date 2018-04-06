import { combineReducers } from 'redux';
import { movies, movie, recommendations } from './movies';
import { genres } from './genres';

const rootReducer = combineReducers({
  movies,
  genres,
  movie,
  recommendations
});

export default rootReducer;
