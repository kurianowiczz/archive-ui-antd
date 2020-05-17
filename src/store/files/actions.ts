import { createActions } from 'redux-actions';

export const {
    fetchFiles,
    fetchFilesSuccess,
    fetchFilesError
} = createActions(
    'FETCH_FILES',
    'FETCH_FILES_SUCCESS',
    'FETCH_FILES_ERROR',
);
