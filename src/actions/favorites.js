import * as actions from '../helpers/constants';

export const addMovieToFavorites = id => {
  const addMovie = id => ({ type: actions.ADD_MOVIE_TO_FAVORITES, id });

  return dispatch => {
    dispatch(addMovie(id));
  };
};

export const removeMovieFromFavorites = id => {
  const removeMovie = id => ({ type: actions.REMOVE_MOVIE_FROM_FAVORITES, id });

  return dispatch => {
    dispatch(removeMovie(id));
  };
};
