import { api } from '../api';
import * as actions from '../helpers/constants';

export const getGenres = () => {
  const request = () => ({ type: actions.GET_GENRES_REQUEST });
  const success = genres => ({ type: actions.GET_GENRES_SUCCESS, genres });
  const failure = error => ({ type: actions.GET_GENRES_FAILURE, error });

  return dispatch => {
    dispatch(request());
    api.getGenres().then(response => dispatch(success(response.data)));
  };
};
