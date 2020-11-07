import {booksAPI} from '../../api/api.js';

const SET_BOOKS = 'SET-BOOKS';
const SET_PAGE = 'SET-PAGE';

const initialState = {
    books: [],
    limit: 5,
    page: 1,
    total: 0
}

const booksReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_BOOKS:
            return {
                ...state,
                books: action.books,
                total: action.total
            }
        case SET_PAGE:
            return {
                ...state,
                page: action.page
            }
        default:
            return state;
    }
}

const setBooks = (books, total) => {
    return {
        type: SET_BOOKS,
        books,
        total
    }
}

const setPage = (page) => {
    return {
        type: SET_PAGE,
        page
    }
}

const getBooks = (limit, page) => {
    return (dispatch) => {
        dispatch(setPage(page));
        booksAPI.getBooks(limit, page).then((response) => {
            dispatch(setBooks(response.data, response.headers['x-total-count']));
        })
    }
}

export default booksReducer;
export {setPage, getBooks};