import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import 'reset-css';
import './main.css';
import HeaderContainer from './components/Header/HeaderContainer.js'
import BooksContainer from './components/Books/BooksContainer.js';
import LoginContainer from './components/Login/LoginContainer.js';
import ProfileContainer from './components/Profile/ProfileContainer.js';
import MainPage from './components/MainPage/MainPage.js';

const App = (props) => {
    return (
        <BrowserRouter>
            <HeaderContainer/>
            <Switch>
                <Route 
                    path="/" 
                    exact
                    render={() => {
                        return (
                            <MainPage/>
                        )
                    }}
                />
                <Route 
                    path="/books" 
                    exact
                    render={() => {
                        return (
                            <BooksContainer/>
                        )
                    }}
                /> 
                <Route 
                    path="/profile" 
                    exact
                    render={() => {
                        return (
                            <ProfileContainer/>
                        )
                    }}
                />
                <Route 
                    path="/login" 
                    exact
                    render={() => {
                        return (
                            <LoginContainer/>
                        )
                    }}
                />  
            </Switch>
        </BrowserRouter>
    )
}

export default App;