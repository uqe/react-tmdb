import React from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import Routes from './helpers/routes';

const Root = ({ history, store }) => (
  <Provider store={store}>
    <Routes history={history} />
  </Provider>
);

export default hot(module)(Root);
