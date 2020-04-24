import { handleActions, Action } from 'redux-actions';

import { register, registerSuccess, login, loginSuccess, handleError, logOut } from './actions';
import IUser from '../../interfaces/IUser';
import IServerError from '../../interfaces/IServerError';

const DEFAULT_STATE: IUserState = {
    isLoading: false,
    user: null,
    token: null,
    error: null,
};

export interface IUserState {
    isLoading: boolean;
    user: null | IUser;
    token: null | string;
    error: null | IServerError;
}

export default handleActions<IUserState, any>(
    {
        [register.toString()]: (state) => ({ ...state, isLoading: true }),
        [registerSuccess.toString()]: (
            state,
            { payload }: Action<{ user: IUser; token: string }>
        ) => ({ error: null, isLoading: false, user: payload.user, token: payload.token }),
        [handleError.toString()]: (
            state,
            { payload }: Action<{ error: IServerError }>
        ) => ({ ...DEFAULT_STATE, error: payload.error }),
        [login.toString()]: (state) => ({ ...state, isLoading: true }),
        [loginSuccess.toString()]: (
            state,
            { payload }: Action<{ user: IUser; token: string }>
        ) => ({ error: null, isLoading: false, user: payload.user, token: payload.token }),
        [logOut.toString()]: () => ({
            ...DEFAULT_STATE
        })
    },
    DEFAULT_STATE,
);
