import { createActions } from 'redux-actions';

export const {
    register,
    registerSuccess,
    login,
    loginSuccess,
    handleError,
    setUpApp,
    logOut,
} = createActions(
    'REGISTER',
    'REGISTER_SUCCESS',
    'LOGIN',
    'LOGIN_SUCCESS',
    'HANDLE_ERROR',
    'SET_UP_APP',
    'LOG_OUT'
);
