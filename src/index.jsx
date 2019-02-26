import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import 'bootstrap/dist/css/bootstrap.css';

import routes from './routes';
import configureStore from './store/configureStore';
import intialState from './reducers/initialState';

const store = configureStore(intialState);
const history = syncHistoryWithStore(browserHistory, store);

ReactDom.render(
    <Provider store={store}>
        <Router history={history} routes={routes} />
    </Provider>,
    document.getElementById('root')
);

