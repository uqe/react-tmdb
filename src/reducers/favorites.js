import { ADD_MOVIE_TO_FAVORITES, REMOVE_MOVIE_FROM_FAVORITES } from '../helpers/constants';

const initialState = [];

export const favorites = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE_TO_FAVORITES:
      return [...state, action.movie];
    case REMOVE_MOVIE_FROM_FAVORITES:
      return state.filter(favmovie => favmovie.id !== action.movie.id);
    default:
      return state;
  }
};
