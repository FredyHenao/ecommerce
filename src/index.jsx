import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';

import { Provider } from 'react-redux';

import routes from './routes';
import configureStore, { history } from './store/configureStore';
import initialState from './reducers/initialState';

const store = configureStore(initialState);

ReactDom.render(
  <Provider store={store}>
      <ConnectedRouter history={history}>
          {routes}
      </ConnectedRouter>
  </Provider>,
    document.getElementById('root')
);

