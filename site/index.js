/**
 * QuarkUi Site
 * @author ryan.bian
 */
import 'babel-polyfill';
import ReactDOM from 'react-dom';
import React from 'react';

/* eslint-disable import/no-unresolved, import/extensions */
import { AppContainer } from 'react-hot-loader';

import App from './Site';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('App'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./Site', () => {
    render(App);
  });
}

