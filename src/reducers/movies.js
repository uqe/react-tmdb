import {
  GET_POPULAR_MOVIES_REQUEST,
  GET_POPULAR_MOVIES_SUCCESS,
  GET_POPULAR_MOVIES_FAILURE,
  GET_MOVIE_DETAILS_REQUEST,
  GET_MOVIE_DETAILS_SUCCESS,
  GET_MOVIE_DETAILS_FAILURE,
  GET_SIMILAR_MOVIES_REQUEST,
  GET_SIMILAR_MOVIES_SUCCESS,
  GET_SIMILAR_MOVIES_FAILURE,
  GET_MOVIE_SEARCH_RESULTS_REQUEST,
  GET_MOVIE_SEARCH_RESULTS_SUCCESS,
  GET_MOVIE_SEARCH_RESULTS_FAILURE
} from '../helpers/constants';

export const movies = (state = {}, action) => {
  switch (action.type) {
    case GET_POPULAR_MOVIES_REQUEST:
      return { isFetching: true };
    case GET_POPULAR_MOVIES_SUCCESS:
      return { ...action.movies, isFetching: false, isFetched: true };
    case GET_POPULAR_MOVIES_FAILURE:
      return { error: action.error, isFetching: false };
    default:
      return state;
  }
};

export const movie = (state = {}, action) => {
  switch (action.type) {
    case GET_MOVIE_DETAILS_REQUEST:
      return { isFetching: true };
    case GET_MOVIE_DETAILS_SUCCESS:
      return { results: action.movie, isFetching: false, isFetched: true };
    case GET_MOVIE_DETAILS_FAILURE:
      return { error: action.error, isFetching: false };
    default:
      return state;
  }
};

export const similar = (state = {}, action) => {
  switch (action.type) {
    case GET_SIMILAR_MOVIES_REQUEST:
      return { isFetching: true };
    case GET_SIMILAR_MOVIES_SUCCESS:
      return { ...action.similar, isFetching: false, isFetched: true };
    case GET_SIMILAR_MOVIES_FAILURE:
      return { error: action.error, isFetching: false };
    default:
      return state;
  }
};

export const search = (state = {}, action) => {
  switch (action.type) {
    case GET_MOVIE_SEARCH_RESULTS_REQUEST:
      return { isFetching: true };
    case GET_MOVIE_SEARCH_RESULTS_SUCCESS:
      return { ...action.search, isFetching: false, isFetched: true };
    case GET_MOVIE_SEARCH_RESULTS_FAILURE:
      return { error: action.error, isFetching: false };
    default:
      return state;
  }
};
