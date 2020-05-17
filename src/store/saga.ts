import { fork } from 'redux-saga/effects';
import users from './users/saga';
import files from './files/saga';

export default function* (): Generator { //функция генератор
    yield fork(users);
    yield fork(files);
};
