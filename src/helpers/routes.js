import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';

import PopularMoviesPage from '../containers/PopularMoviesPage';
import MovieDetailsPage from '../containers/MovieDetailsPage';
import SearchResultsPage from '../containers/SearchResultsPage';

const history = createBrowserHistory();

export const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={PopularMoviesPage} />
      <Route path="/search" component={SearchResultsPage} />
      <Route path="/movie/:id" component={MovieDetailsPage} />
      <Route path="/:page" component={PopularMoviesPage} />
    </Switch>
  </Router>
);
