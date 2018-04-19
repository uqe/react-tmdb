import { GET_GENRES_REQUEST, GET_GENRES_SUCCESS, GET_GENRES_FAILURE } from '../helpers/constants';
import { api } from '../api';
import { store } from '../helpers';

export const getGenres = () => {
  const request = () => ({ type: GET_GENRES_REQUEST });
  const success = genres => ({ type: GET_GENRES_SUCCESS, genres });
  const failure = error => ({ type: GET_GENRES_FAILURE, error });

  return async dispatch => {
    if (store.getState().genres.genres === undefined) {
      dispatch(request());
      const response = await api.getGenres();
      dispatch(success(response.data));
    }
  };
};
