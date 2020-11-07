import {applyMiddleware, combineReducers, createStore} from 'redux';
import thankMiddleware from 'redux-thunk';
import booksReducer from './reducers/books-reducer.js';

const reducers = combineReducers({
    books: booksReducer
});

const store = createStore(reducers, applyMiddleware(thankMiddleware));

export default store;