import React from 'react';
import styles from './Profile.module.css';

const Profile = (props) => {
    return (
        <div className={styles.profile}>
            <p>Имя: {props.firstName}</p>
            <p>Фамилия: {props.lastName}</p>
            <button className={styles.btn} onClick={props.logout}>Выйти</button>
        </div>
    )
}

export default Profile;