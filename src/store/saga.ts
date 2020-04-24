import { call, fork, put } from 'redux-saga/effects';
import users from './users/saga';
import { getMe } from '../api/users';
import { loginSuccess, handleError } from './users/actions';

export default function* (): Generator { //функция генератор

    yield fork(users);
};
