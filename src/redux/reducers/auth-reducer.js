import {authAPI} from '../../api/api.js';

const UPDATE_LOGIN = 'UPDATE-LOGIN';
const UPDATE_PASSWORD = 'UPDATE-PASSWORD';
const UPDATE_ERRORS = 'UPDATE-ERRORS';
const USER_AUTH = 'USER-AUTH';
const IS_AUTH = 'IS-AUTH';
const NOT_AUTH = 'NOT-AUTH'

const initialState = {
    isAuth: false,
    userName: {
        firstName: '',
        lastName: ''
    },
    loginForm: {
        login: '',
        password: '',
        errors: []
    }
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_LOGIN:
            return {
                ...state,
                loginForm: {
                    ...state.loginForm,
                    login: action.login
                }
            }
        case UPDATE_PASSWORD:
            return {
                ...state,
                loginForm: {
                    ...state.loginForm,
                    password: action.password
                }
            }
        case UPDATE_ERRORS:
            return {
                ...state,
                loginForm: {
                    ...state.loginForm,
                    errors: action.errors
                }
            }
        case USER_AUTH:
            return {
                ...state,
                isAuth: true,
                userName: {
                    ...state.userName,
                    firstName: action.firstName,
                    lastName: action.lastName
                }
            }
        case IS_AUTH:
            return {
                ...state,
                isAuth: action. isAuth
            }
        case NOT_AUTH: 
            return {
                ...state,
                isAuth: false,
                userName: {
                    ...state.userName,
                    firstName: '',
                    lastName: ''
                }
            }
        default:
            return state
    }
}

const updateLogin = (login) => {
    return {
        type: UPDATE_LOGIN,
        login
    }
}

const updatePassword = (password) => {
    return {
        type: UPDATE_PASSWORD,
        password
    }
}

const updateErrors = (errors) => {
    return {
        type: UPDATE_ERRORS,
        errors
    }
}

const userAuth = (firstName, lastName) => {
    return {
        type: USER_AUTH,
        firstName,
        lastName
    }
}

const notAuth = () => {
    return {
        type: NOT_AUTH
    }
}

const isAuth = () => {
    return (dispatch) => {
        authAPI.isAuth().then((response) => {
            if(response.resultCode === 0) {
                dispatch(userAuth(response.data.firstName, response.data.lastName))
            };
        })
    }
}

const sendForm = (login, password) => {
    return (dispatch) => {
        authAPI.login(login, password).then((response) => {
            if(response.resultCode === 0) {
                dispatch(userAuth(response.data.firstName, response.data.lastName))
            }else if(response.resultCode === 1) {
                dispatch(updateErrors(response.messages))
            }else {
                dispatch(updateErrors(['Нет ответа от сервера']))
            }
        })
    }
}

const logout = () => {
    return (dispatch) => {
        authAPI.logout().then((response) => {
            if(response.resultCode === 0) {
                dispatch(notAuth())
            }else {
                dispatch(updateErrors(['Нет ответа от сервера']))
            }
        })
    }
}

export default authReducer;
export {updateLogin, updatePassword, sendForm, isAuth, logout};