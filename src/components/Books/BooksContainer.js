import React from 'react';
import {connect} from 'react-redux';
import {getBooks} from '../../redux/reducers/books-reducer.js';
import Books from './Books.js';

class BooksContainer extends React.Component {
    componentDidMount() {
        this.props.getBooks(this.props.limit, this.props.page);
    }

    onChangedPage = (page) => {
        this.props.getBooks(this.props.limit, page);
    }

    render() {
        return (
            <Books
                books={this.props.books}
                onChangedPage={this.onChangedPage}
                total={this.props.total}
                limit={this.props.limit}
                page={this.props.page}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books.books,
        limit: state.books.limit,
        page: state.books.page,
        total: state.books.total
    }
}

export default connect(mapStateToProps, {getBooks})(BooksContainer);