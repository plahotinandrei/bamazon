import React from 'react';
import {connect} from 'react-redux';
import Header from './Header.js'
import {isAuth} from '../../redux/reducers/auth-reducer.js';

class HeaderContainer extends React.Component {
    componentDidMount() {
        console.log(1);
        this.props.isAuth();
    }

    render() {
        return (
            <Header/>
        )
    }
}

export default connect(null, {isAuth})(HeaderContainer);