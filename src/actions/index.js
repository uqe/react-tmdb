import * as moviesActions from './movies';
import * as genresActions from './genres';
import * as favoritesActions from './favorites';

export const actions = { ...moviesActions, ...genresActions, ...favoritesActions };
