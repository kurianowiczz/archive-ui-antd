import { call, put, takeLatest } from 'redux-saga/effects';

import { fetchFiles, fetchFilesError, fetchFilesSuccess } from './actions';
import { getFiles } from "../../api/files";

function* fetchFilesSaga() {
    try {
        const { files } = yield call(getFiles);
        yield put(fetchFilesSuccess({ files }));
    } catch (error) {
        yield put(fetchFilesError({ error }));
    }
}

export default function* () {
    yield takeLatest(fetchFiles, fetchFilesSaga);
}
