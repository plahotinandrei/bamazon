import React from 'react';

const Login = (props) => {
    return (
        <div className='container'>
            <form>
                <input type='text' value={props.login} onChange={(e) => {props.updateLogin(e.target.value)}}/><br/><br/>
                <input type='password' value={props.password} onChange={(e) => {props.updatePassword(e.target.value)}}/><br/><br/>
                <span></span>
                <button type='button' onClick={() => {props.sendForm(props.login, props.password)}}>Send</button>
            </form>
        </div>
    )
}

export default Login;