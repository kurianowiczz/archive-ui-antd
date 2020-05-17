import axios from './axios';
import IUser from '../interfaces/IUser';

export interface IUserResponse { token: string, user: IUser }

export const registerUser = async (user: IUser): Promise<IUserResponse> => {
    return axios.post('/users/add', user);
};

export const loginUser = async (email: string, password: string): Promise<{ token: string, user: IUser }> => {
    console.log('+');
    return axios.post('/users/login', { email, password });
};

export const getMe = async () => {
    return axios.get('/users/me');
};

export const getAll = async () => {
    return axios.get('/users/all');
};

export const toggleBan = async (id: string) => {
    return axios.post('/users/ban', { id });
};
