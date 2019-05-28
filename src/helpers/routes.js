import React, { Suspense, lazy } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import { Container } from '../ui/Container';

const Popular = lazy(() => import('../pages/Popular/container'));
const Movie = lazy(() => import('../pages/Movie'));
const Favorites = lazy(() => import('../pages/Favorites'));
const Search = lazy(() => import('../pages/Search'));

const Routes = ({ history }) => (
  <Router history={history}>
    <Container>
      <Header />
      <Suspense fallback={null}>
        <Switch>
          <Route exact path="/" component={Popular} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/search" component={Search} />
          <Route path="/movie/:id" component={Movie} />
          <Route path="/page/:page" component={Popular} />
        </Switch>
      </Suspense>
    </Container>
  </Router>
);

export default Routes;
