import React from 'react';
import styles from './Books.module.css';

const Books = (props) => {
    const books = props.books.map((book) => {
        return (
            <li key={book.title} className={styles.item}>
                <div className={styles.card}>
                    <p>Автор:<br/> {book.author}</p>
                    <p>Название:<br/> {book.title}</p>
                </div>
            </li>
        )
    });

    let pageButtons = [];

    for(let i = 1; i <= Math.ceil(props.total/props.limit); i++) {
        pageButtons.push(
            <button
                key={i}
                onClick={() => {props.onChangedPage(i)}}
                className={`${styles.btn} ${i == props.page ? styles.active : ''}`} 
            >
                {i}
            </button>
        );  
    }


    return (
        <div className={`container ${styles.content}`}>
            <ul className={styles.list}>
                {books}
            </ul>
            <div className={styles.buttons}>
                {pageButtons}
            </div>
        </div>
        
    )
}

export default Books;