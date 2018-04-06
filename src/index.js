import React from 'react';
import { render } from 'react-dom';
import { injectGlobal } from 'styled-components';
import Root from './Root';

render(<Root />, document.getElementById('app'));

injectGlobal`
  body {
    padding: 0;
    margin: 0;
    font-family: apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;
