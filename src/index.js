import React from 'react';
import { render } from 'react-dom';
import { injectGlobal } from 'styled-components';
import Root from './Root';
import { createBrowserHistory } from 'history';
import { store } from './helpers';

const history = createBrowserHistory();

render(<Root history={history} store={store} />, document.getElementById('app'));

injectGlobal`
  body {
    padding: 0;
    margin: 0;
    font-family: apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  html {
    -webkit-transform: translate3d(0,0,0);
  }
`;
