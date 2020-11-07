import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-json-server.typicode.com/plahotinandrei/FakeJSONPlaceholder',
});

const booksAPI = {
    getBooks(limit, page) {
        return instance.get(`/books/?_limit=${limit}&_page=${page}`)
    }
};

//Имитация запросов к API
const authAPI = {
    isAuth() {
        return new Promise((resolve, reject) => {
            resolve({
                isAuth: JSON.parse(localStorage.getItem('isAuth'))
            })
        })
    },
    ligin(login, password) {
        return new Promise((resolve, reject) => {
            if(login === 'admin' && password === 'password') {
                localStorage.setItem('isAuth', true);
                resolve({
                    resultCode: 0,
                    messages: [],
                    data: {
                        login: 'admin'
                    }
                });
            }else {
                localStorage.setItem('isAuth', false);
                resolve({
                    resultCode: 1,
                    messages: ['Имя пользователя или пароль введены не верно'],
                })
            }
        }); 
    },
    logout() {
        return new Promise((resolve, reject) => {
            localStorage.setItem('isAuth', false);
            resolve({
                resultCode: 0,
            });
        }); 
    }
}

export {booksAPI, authAPI};
