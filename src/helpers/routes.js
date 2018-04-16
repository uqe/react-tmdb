import React from 'react';
import { Router, Route, Switch, withRouter } from 'react-router-dom';
import PopularMoviesPage from '../pages/PopularMoviesPage';
import MovieDetailsPage from '../pages/MovieDetailsPage';
import SearchResultsPage from '../pages/SearchResultsPage';
import FavoritesMoviesPage from '../pages/FavoritesMoviesPage';

const Routes = ({ ...props }) => (
  <Router {...props}>
    <Switch>
      <Route exact path="/" component={PopularMoviesPage} />
      <Route path="/favorites/page/:page" component={FavoritesMoviesPage} />
      <Route path="/search" component={SearchResultsPage} />
      <Route path="/movie/:id" component={MovieDetailsPage} />
      <Route path="/:page" component={PopularMoviesPage} />
    </Switch>
  </Router>
);

export default withRouter(Routes);
