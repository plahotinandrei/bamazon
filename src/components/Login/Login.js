import React from 'react';
import styles from './Login.module.css';

const Login = (props) => {
    const errors = props.errors.map((error) => {
        return (
            <p key={error}>{error}</p>
        )
    })
    return (
        <div className={`container ${styles.content}`}>
            <form className={styles.form}>
                <input type='text' value={props.login} onChange={(e) => {props.updateLogin(e.target.value)}} placeholder='login'/>
                <input type='password' value={props.password} onChange={(e) => {props.updatePassword(e.target.value)}} placeholder='password'/>
                <div className={styles.errors}>
                    {errors}
                </div>
                <button type='button' onClick={() => {props.sendForm(props.login, props.password)}}>Send</button>
            </form>
        </div>
    )
}

export default Login;