import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Header.module.css';

const Header = (props) => {
    return (
        <header>
            <nav className={styles.nav}>
                    <NavLink to='/' activeClassName={styles.active} exact>Main page</NavLink>
                    <NavLink to='/books' activeClassName={styles.active} exact>Books</NavLink>
                    <NavLink to='/profile' activeClassName={styles.active} exact>Profile</NavLink>
                    <NavLink to='/login' activeClassName={styles.active} exact>Login</NavLink>
            </nav>
        </header>
        
    )
}

export default Header;