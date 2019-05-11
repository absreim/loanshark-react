import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import userReducer from './user';
import loanReducer from './loan';

const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware));

const rootReducer = combineReducers({
    user: userReducer,
    loan: loanReducer
})

const store = createStore(rootReducer, middleware);

export default store;
