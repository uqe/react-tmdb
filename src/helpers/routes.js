import React from 'react';
import { Router, Route, Switch, withRouter } from 'react-router-dom';
import loadable from '@7rulnik/react-loadable';
import { Loader } from '../components/Loader';

const PopularMoviesPage = loadable({
  loader: () => import('../pages/PopularMoviesPage'),
  loading: Loader
});

const MovieDetailsPage = loadable({
  loader: () => import('../pages/MovieDetailsPage'),
  loading: Loader
});

const SearchResultsPage = loadable({
  loader: () => import('../pages/SearchResultsPage'),
  loading: Loader
});

const FavoritesMoviesPage = loadable({
  loader: () => import('../pages/FavoritesMoviesPage'),
  loading: Loader
});

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
