import {compose ,createStore, applyMiddleware} from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk;'
import {composeWithDevTools} from "redux-devtools-extension";
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import rootReducer from '../reducers';

export const history = createBrowserHistory();

const enhacer = composeWithDevTools(
    applyMiddleware(thunk, logger(), routerMiddleware(history))
);

export default function configureStore(initialState) {
    return createStore(rootReducer(history), initialState, enhacer)
}