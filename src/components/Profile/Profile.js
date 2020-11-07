import React from 'react';

const Profile = (props) => {
    return (
        <div>
            <p>Имя: {props.firstName}</p>
            <p>Фамилия: {props.lastName}</p>
            <button onClick={props.logout}>Выйти</button>
        </div>
    )
}

export default Profile;