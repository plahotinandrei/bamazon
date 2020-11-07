import React from 'react';
import Profile from './Profile.js';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../../redux/reducers/auth-reducer.js';

const ProfileContainer = (props) => {
    return (
        props.isAuth ? <Profile
            firstName={props.firstName}
            lastName={props.lastName}
            logout={props.logout}
        /> : <Redirect to='/login'/>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        firstName: state.auth.userName.firstName,
        lastName: state.auth.userName.lastName
    }
}

export default connect(mapStateToProps, {logout})(ProfileContainer);