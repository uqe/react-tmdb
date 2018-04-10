import * as actions from '../helpers/constants';

export const movies = (state = {}, action) => {
  switch (action.type) {
    case actions.GET_POPULAR_MOVIES_REQUEST:
      return { isFetching: true };
    case actions.GET_POPULAR_MOVIES_SUCCESS:
      return { ...action.movies, isFetching: false, isFetched: true };
    case actions.GET_POPULAR_MOVIES_FAILURE:
      return { error: action.error, isFetching: false };
    default:
      return state;
  }
};

export const movie = (state = {}, action) => {
  switch (action.type) {
    case actions.GET_MOVIE_DETAILS_REQUEST:
      return { isFetching: true };
    case actions.GET_MOVIE_DETAILS_SUCCESS:
      return { ...action.movie, isFetching: false, isFetched: true };
    case actions.GET_MOVIE_DETAILS_FAILURE:
      return { error: action.error, isFetching: false };
    default:
      return state;
  }
};

export const recommendations = (state = {}, action) => {
  switch (action.type) {
    case actions.GET_MOVIE_RECOMMENDATIONS_REQUEST:
      return { isFetching: true };
    case actions.GET_MOVIE_RECOMMENDATIONS_SUCCESS:
      return { ...action.recommendations, isFetching: false, isFetched: true };
    case actions.GET_MOVIE_RECOMMENDATIONS_FAILURE:
      return { error: action.error, isFetching: false };
    default:
      return state;
  }
};

export const search = (state = {}, action) => {
  switch (action.type) {
    case actions.GET_MOVIE_SEARCH_RESULTS_REQUEST:
      return { isFetching: true };
    case actions.GET_MOVIE_SEARCH_RESULTS_SUCCESS:
      return { ...action.search, isFetching: false, isFetched: true };
    case actions.GET_MOVIE_SEARCH_RESULTS_FAILURE:
      return { error: action.error, isFetching: false };
    default:
      return state;
  }
};
