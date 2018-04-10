import { api } from '../api';
import * as actions from '../helpers/constants';

export const getPopularMovies = page => {
  const request = () => ({ type: actions.GET_POPULAR_MOVIES_REQUEST });
  const success = movies => ({ type: actions.GET_POPULAR_MOVIES_SUCCESS, movies });
  const failure = error => ({ type: actions.GET_POPULAR_MOVIES_FAILURE, error });

  return dispatch => {
    dispatch(request(page));
    api.getPopularMovies(page).then(response => dispatch(success(response.data)));
  };
};

export const getMovieDetails = id => {
  const request = () => ({ type: actions.GET_MOVIE_DETAILS_REQUEST });
  const success = movie => ({ type: actions.GET_MOVIE_DETAILS_SUCCESS, movie });
  const failure = error => ({ type: actions.GET_MOVIE_DETAILS_FAILURE, error });

  return dispatch => {
    dispatch(request(id));
    api.getMovieDetails(id).then(response => dispatch(success(response.data)));
  };
};

export const getMovieRecommendations = (id, page) => {
  const request = () => ({ type: actions.GET_MOVIE_RECOMMENDATIONS_REQUEST });
  const success = recommendations => ({ type: actions.GET_MOVIE_RECOMMENDATIONS_SUCCESS, recommendations });
  const failure = error => ({ type: actions.GET_MOVIE_RECOMMENDATIONS_FAILURE, error });

  return dispatch => {
    dispatch(request(id, page));
    api.getMovieRecommendations(id, page).then(response => dispatch(success(response.data)));
  };
};

export const getMovieSearchResults = (query, page) => {
  const request = () => ({ type: actions.GET_MOVIE_SEARCH_RESULTS_REQUEST });
  const success = search => ({ type: actions.GET_MOVIE_SEARCH_RESULTS_SUCCESS, search });
  const failure = error => ({ type: actions.GET_MOVIE_SEARCH_RESULTS_FAILURE, error });

  return dispatch => {
    dispatch(request(query, page));
    api.getMovieSearchResults(query, page).then(response => dispatch(success(response.data)));
  };
};
