import React from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Routes, store } from './helpers';

const Root = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default hot(module)(Root);
