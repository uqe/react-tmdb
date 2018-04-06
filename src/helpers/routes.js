import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import PopularMoviesPage from '../containers/PopularMoviesPage';
import MovieDetailsPage from '../containers/MovieDetailsPage';

const history = createBrowserHistory();

export const Routes = () => (
  <Router history={history}>
    <Switch>
      <Redirect from="/1" to="/" />
      <Route exact path="/" component={PopularMoviesPage} />
      <Route path="/movie/:id" component={MovieDetailsPage} />
      <Route path="/:page" component={PopularMoviesPage} />
    </Switch>
  </Router>
);
