import axios from './axios';
import IUser from '../interfaces/IUser';

export const registerUser = async (user: IUser): Promise<{ user: IUser }> => {
    return axios.post('/users/add', user);
};
