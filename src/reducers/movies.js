import * as actionTypes from '../helpers/constants';

export const movies = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_POPULAR_MOVIES_REQUEST:
      return { isFetching: true };
    case actionTypes.GET_POPULAR_MOVIES_SUCCESS:
      return { response: action.movies, isFetching: false, isFetched: true };
    case actionTypes.GET_POPULAR_MOVIES_FAILURE:
      return { error: action.error, isFetching: false };
    default:
      return state;
  }
};

export const movie = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_MOVIE_DETAILS_REQUEST:
      return { isFetching: true };
    case actionTypes.GET_MOVIE_DETAILS_SUCCESS:
      return { response: action.movie, isFetching: false, isFetched: true };
    case actionTypes.GET_MOVIE_DETAILS_FAILURE:
      return { error: action.error, isFetching: false };
    default:
      return state;
  }
};

export const recommendations = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_MOVIE_RECOMMENDATIONS_REQUEST:
      return { isFetching: true };
    case actionTypes.GET_MOVIE_RECOMMENDATIONS_SUCCESS:
      return { response: action.recommendations, isFetching: false, isFetched: true };
    case actionTypes.GET_MOVIE_RECOMMENDATIONS_FAILURE:
      return { error: action.error, isFetching: false };
    default:
      return state;
  }
};
