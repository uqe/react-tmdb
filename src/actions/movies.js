import { api } from '../api';
import * as actionTypes from '../helpers/constants';

export const getPopularMovies = page => {
  const request = () => ({ type: actionTypes.GET_POPULAR_MOVIES_REQUEST });
  const success = movies => ({ type: actionTypes.GET_POPULAR_MOVIES_SUCCESS, movies });
  const failure = error => ({ type: actionTypes.GET_POPULAR_MOVIES_FAILURE, error });

  return dispatch => {
    dispatch(request(page));
    api.getPopularMovies(page).then(movies => dispatch(success(movies)));
  };
};

export const getMovieDetails = id => {
  const request = () => ({ type: actionTypes.GET_MOVIE_DETAILS_REQUEST });
  const success = movie => ({ type: actionTypes.GET_MOVIE_DETAILS_SUCCESS, movie });
  const failure = error => ({ type: actionTypes.GET_MOVIE_DETAILS_FAILURE, error });

  return dispatch => {
    dispatch(request(id));
    api.getMovieDetails(id).then(movie => dispatch(success(movie)));
  };
};

export const getMovieRecommendations = (id, page) => {
  const request = () => ({ type: actionTypes.GET_MOVIE_RECOMMENDATIONS_REQUEST });
  const success = recommendations => ({ type: actionTypes.GET_MOVIE_RECOMMENDATIONS_SUCCESS, recommendations });
  const failure = error => ({ type: actionTypes.GET_MOVIE_RECOMMENDATIONS_FAILURE, error });

  return dispatch => {
    dispatch(request(id, page));
    api.getMovieRecommendations(id, page).then(recommendations => dispatch(success(recommendations)));
  };
};
