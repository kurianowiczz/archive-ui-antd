import { call, put, takeLatest } from 'redux-saga/effects';
import {getMe, IUserResponse, loginUser, registerUser} from '../../api/users';
import {Action} from 'redux-actions';
import { register, registerSuccess, handleError, login, loginSuccess, setUpApp } from './actions';
import {history} from '../../router';
import Routes from '../../constants/routes';

function* registerSaga({payload}:Action<{name: string; email: string; password: string}>):Generator {
    try {
        // @ts-ignore
        const { token, user }: IUserResponse = yield call(registerUser, {name: payload.name, email: payload.email, password: payload.password});
        localStorage.setItem('token', token);
        yield put(registerSuccess({token, user}));
    } catch (error) {
        yield put(handleError({error}));
    }
}

function* loginSaga({payload}:Action<{email: string, password: string}>):Generator {
    try {
        // @ts-ignore
        const { token, user }: IUserResponse = yield call(loginUser, payload.email, payload.password);
        localStorage.setItem('token', token);
        yield put(loginSuccess({ token, user }));
    } catch (error) {
        yield put(handleError({error}));
    }
}

function* setUpAppSaga() {
    const token = localStorage.getItem('token');
    if (!!token) {
        try {
            const { user } = yield call(getMe);
            yield put(loginSuccess({ user, token }));
            if (history.location.pathname === '/') {
                history.push(Routes.UPLOAD.path);
            }
        } catch (error) {
            yield put(handleError({ error }));
        }
    }
}

export default function* () {
    yield takeLatest(setUpApp, setUpAppSaga);
    yield takeLatest(register, registerSaga);
    yield takeLatest(login, loginSaga);
};
