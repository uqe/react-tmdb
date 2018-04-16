import React from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import Routes from './helpers/routes';
import { ConnectedRouter } from 'react-router-redux';

const Root = ({ history, store }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>
);

export default hot(module)(Root);
