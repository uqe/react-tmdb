import * as actions from '../helpers/constants';

const initialState = [];

export const favorites = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_MOVIE_TO_FAVORITES:
      return [...state, action.movie];
    case actions.REMOVE_MOVIE_FROM_FAVORITES:
      return state.filter(favmovie => favmovie.id !== action.movie.id);
    default:
      return state;
  }
};
