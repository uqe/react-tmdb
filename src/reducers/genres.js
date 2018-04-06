import * as actionTypes from '../helpers/constants';

export const genres = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_GENRES_REQUEST:
      return { isFetching: true };
    case actionTypes.GET_GENRES_SUCCESS:
      return { response: action.genres, isFetching: false, isFetched: true };
    case actionTypes.GET_GENRES_FAILURE:
      return { error: action.error, isFetching: false };
    default:
      return state;
  }
};
