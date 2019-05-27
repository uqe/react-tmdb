import React from 'react';
import { Router, Route, Switch, withRouter } from 'react-router-dom';
import loadable from '@7rulnik/react-loadable';
import { Loader } from '../components/Loader';
import Header from '../components/Header';
import { Container } from '../ui/Container';

const Popular = loadable({
  loader: () => import('../pages/Popular/container'),
  loading: Loader
});

const Movie = loadable({
  loader: () => import('../pages/Movie'),
  loading: Loader
});

const Search = loadable({
  loader: () => import('../pages/Search'),
  loading: Loader
});

const Favorites = loadable({
  loader: () => import('../pages/Favorites'),
  loading: Loader
});

const Routes = ({ ...props }) => (
  <Router {...props}>
    <Container>
      <Header />
      <Switch>
        <Route exact path="/" component={Popular} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/search" component={Search} />
        <Route path="/movie/:id" component={Movie} />
        <Route path="/page/:page" component={Popular} />
      </Switch>
    </Container>
  </Router>
);

export default withRouter(Routes);
