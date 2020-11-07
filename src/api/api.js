import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-json-server.typicode.com/plahotinandrei/FakeJSONPlaceholder',
});

const booksAPI = {
    getBooks(limit, page) {
        return instance.get(`/books/?_limit=${limit}&_page=${page}`)
    }
};

export {booksAPI};
