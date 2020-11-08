import React from 'react';
import styles from './MainPage.module.css';

const MainPage = (props) => {
    return (
        <div className={`container ${styles.content}`}>
            <h1 className={styles.title}>Тестовое задание в компанию VISION-WEB</h1>
        </div>
    )
}

export default MainPage;