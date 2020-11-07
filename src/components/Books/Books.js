import React from 'react';
import styles from './Books.module.css';

const Books = (props) => {
    const books = props.books.map((book) => {
        return (
            <li key={book.title} className={styles.item}>
                <p>{book.author}</p>
                <p>{book.title}</p>
            </li>
        )
    });

    let pageButtons = [];

    for(let i = 1; i <= Math.ceil(props.total/props.limit); i++) {
        pageButtons.push(
            <button
                key={i}
                onClick={() => {props.onChangedPage(i)}}
                className={styles.btn} 
            >
                {i}
            </button>
        );  
    }


    return (
        <div>
            <ul className={styles.list}>
                {books}
            </ul>
            {pageButtons}
        </div>
        
    )
}

export default Books;