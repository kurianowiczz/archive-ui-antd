import axios from 'axios';
import IServerError from '../interfaces/IServerError';
import {config} from 'dotenv';

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'},
});

const DEFAULT_ERROR: IServerError = {
    code: 500,
    body: 'Server error',
};

instance.interceptors.response.use( (response) => {
    if (!response.data) {
        throw DEFAULT_ERROR;
    }
    return response.data;
});

instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    config.headers = {
        authorization: token,
    };

    return config;
});

export default instance;
