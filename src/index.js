import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store/store';
import App from 'components/app';
import { BrowserRouter, Route, Link } from 'react-router-dom';

render(
  <BrowserRouter>
    <Provider store={ store }>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)
