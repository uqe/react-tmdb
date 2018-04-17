import { ADD_MOVIE_TO_FAVORITES, REMOVE_MOVIE_FROM_FAVORITES } from '../helpers/constants';

export const addMovieToFavorites = movie => {
  const addMovie = movie => ({ type: ADD_MOVIE_TO_FAVORITES, movie });

  return dispatch => {
    dispatch(addMovie(movie));
  };
};

export const removeMovieFromFavorites = movie => {
  const removeMovie = movie => ({ type: REMOVE_MOVIE_FROM_FAVORITES, movie });

  return dispatch => {
    dispatch(removeMovie(movie));
  };
};
