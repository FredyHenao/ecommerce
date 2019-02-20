import { combineReducers  } from 'redux';
import { connectRouter  } from 'connected-react-router';

import productList from './productListReducer';
import activeProduct from './activeProductReducer';
import cart from './cartReducer';

const rootReducer = (history) => combineReducers ({
   router: connectRouter(history),
   productList,
   activeProduct,
   cart
});

export default rootReducer;