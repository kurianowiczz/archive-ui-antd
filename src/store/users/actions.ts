import { createActions } from 'redux-actions';

export const {
    register,
    registerSuccess,
    login,
    loginSuccess,
    handleError
} = createActions(
    'REGISTER',
    'REGISTER_SUCCESS',
    'LOGIN',
    'LOGIN_SUCCESS',
    'HANDLE_ERROR',
);
