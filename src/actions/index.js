import * as moviesActions from './movies';
import * as genresActions from './genres';

export const actions = { ...moviesActions, ...genresActions };
