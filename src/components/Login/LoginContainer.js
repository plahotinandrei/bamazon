import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {updateLogin, updatePassword, sendForm} from '../../redux/reducers/auth-reducer.js';
import Login from './Login.js';

const LoginContainer = (props) => {
    return (
        props.isAuth ? <Redirect to='/profile'/> : <Login {...props}/>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.loginForm.login,
        password: state.auth.loginForm.password,
        errors: state.auth.loginForm.errors
    }
}

export default connect(mapStateToProps, {updateLogin, updatePassword, sendForm})(LoginContainer);