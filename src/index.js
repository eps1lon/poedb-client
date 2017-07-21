import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

const renderWithStore = store => App =>
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );

renderWithStore(store)(App);
registerServiceWorker();

if (module.hot) {
  module.hot.accept('./components/App', () => {
    renderWithStore(store)(App);
  });
}
