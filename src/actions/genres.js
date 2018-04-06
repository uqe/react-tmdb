import { api } from '../api';
import * as actionTypes from '../helpers/constants';

export const getGenres = () => {
  const request = () => ({ type: actionTypes.GET_GENRES_REQUEST });
  const success = genres => ({ type: actionTypes.GET_GENRES_SUCCESS, genres });
  const failure = error => ({ type: actionTypes.GET_GENRES_FAILURE, error });

  return dispatch => {
    dispatch(request());
    api.getGenres().then(genres => dispatch(success(genres)));
  };
};
