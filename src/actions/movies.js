import { api } from '../api';
import { fetchGenres, store } from '../helpers';
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

export const getPopularMovies = page => {
  const request = () => ({ type: GET_POPULAR_MOVIES_REQUEST });
  const success = movies => ({ type: GET_POPULAR_MOVIES_SUCCESS, movies });
  const failure = error => ({ type: GET_POPULAR_MOVIES_FAILURE, error });

  return async dispatch => {
    dispatch(request(page));
    const response = await api.getPopularMovies(page);
    dispatch(
      success({
        ...response.data,
        results: response.data.results.map(movie =>
          Object.assign(movie, { all_genres: fetchGenres(store.getState().genres.genres, movie.genre_ids) })
        )
      })
    );
  };
};

export const getMovieDetails = id => {
  const request = () => ({ type: GET_MOVIE_DETAILS_REQUEST });
  const success = movie => ({ type: GET_MOVIE_DETAILS_SUCCESS, movie });
  const failure = error => ({ type: GET_MOVIE_DETAILS_FAILURE, error });

  return async dispatch => {
    dispatch(request(id));
    const response = await api.getMovieDetails(id);
    dispatch(success({ ...response.data, all_genres: response.data.genres.map(genre => genre.name) }));
  };
};

export const getSimilarMovies = (id, page) => {
  const request = () => ({ type: GET_SIMILAR_MOVIES_REQUEST });
  const success = similar => ({ type: GET_SIMILAR_MOVIES_SUCCESS, similar });
  const failure = error => ({ type: GET_SIMILAR_MOVIES_FAILURE, error });

  return async dispatch => {
    dispatch(request(id, page));
    const response = await api.getSimilarMovies(id, page);
    dispatch(
      success({
        ...response.data,
        results: response.data.results.map(movie =>
          Object.assign(movie, {
            all_genres: fetchGenres(store.getState().genres.genres, movie.genre_ids)
          })
        )
      })
    );
  };
};

export const getMovieSearchResults = (query, page) => {
  const request = () => ({ type: GET_MOVIE_SEARCH_RESULTS_REQUEST });
  const success = search => ({ type: GET_MOVIE_SEARCH_RESULTS_SUCCESS, search });
  const failure = error => ({ type: GET_MOVIE_SEARCH_RESULTS_FAILURE, error });

  return async dispatch => {
    dispatch(request(query, page));
    const response = await api.getMovieSearchResults(query, page);
    dispatch(
      success({
        ...response.data,
        results: response.data.results.map(movie =>
          Object.assign(movie, { all_genres: fetchGenres(store.getState().genres.genres, movie.genre_ids) })
        )
      })
    );
  };
};
