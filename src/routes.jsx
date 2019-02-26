import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';ProductListContainer
import ProductListContainer from './products/';

export default (
    <Route path={'/'} component={App}>
        <IndexRoute component={ProductListContainer}/>
    </Route>
);
