import { GET_GENRES_REQUEST, GET_GENRES_SUCCESS, GET_GENRES_FAILURE } from '../helpers/constants';

export const genres = (state = {}, action) => {
  switch (action.type) {
    case GET_GENRES_REQUEST:
      return { isFetching: true };
    case GET_GENRES_SUCCESS:
      return { ...action.genres, isFetching: false, isFetched: true };
    case GET_GENRES_FAILURE:
      return { error: action.error, isFetching: false };
    default:
      return state;
  }
};
