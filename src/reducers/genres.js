import * as actions from '../helpers/constants';

export const genres = (state = {}, action) => {
  switch (action.type) {
    case actions.GET_GENRES_REQUEST:
      return { isFetching: true };
    case actions.GET_GENRES_SUCCESS:
      return { ...action.genres, isFetching: false, isFetched: true };
    case actions.GET_GENRES_FAILURE:
      return { error: action.error, isFetching: false };
    default:
      return state;
  }
};
