import {applyMiddleware, combineReducers, createStore} from 'redux';
import thankMiddleware from 'redux-thunk';
import authReducer from './reducers/auth-reducer.js';
import booksReducer from './reducers/books-reducer.js';

const reducers = combineReducers({
    books: booksReducer,
    auth: authReducer
});

const store = createStore(reducers, applyMiddleware(thankMiddleware));

export default store;