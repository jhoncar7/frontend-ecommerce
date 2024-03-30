import axios from 'axios';

const comicsApi = axios.create({
    baseURL: 'https://desafio-code-nodejs-jhon.onrender.com/api',
    // baseURL:'http://localhost:8080/api'
});

comicsApi.interceptors.request.use(config => {
    config.headers = {
        'x-token': localStorage.getItem('token'),
    }

    return config;
});

export default comicsApi;