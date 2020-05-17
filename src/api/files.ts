import axios from './axios';

export const getFiles = async () => {
    return axios.get('/files');
};
