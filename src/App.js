import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import 'reset-css';
import './main.css';
import Header from './components/Header/Header.js'
import BooksContainer from './components/Books/BooksContainer.js';

const App = (props) => {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route 
                    path="/" 
                    exact
                    render={() => {
                        return (
                            <div>main</div>
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
                            <div>profile</div>
                        )
                    }}
                />
                <Route 
                    path="/login" 
                    exact
                    render={() => {
                        return (
                            <div>login</div>
                        )
                    }}
                />  
            </Switch>
        </BrowserRouter>
    )
}

export default App;