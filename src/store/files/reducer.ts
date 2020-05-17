import { handleActions, Action } from 'redux-actions';

import { fetchFiles, fetchFilesError, fetchFilesSuccess } from './actions';
import IServerError from "../../interfaces/IServerError";

const DEFAULT_STATE: IFilesState = {
    isLoading: false,
    files: [],
    error: null,
};

export interface IFile {
    _id: string;
    user: string;
    fileName: string;
    downloadLink: string;
}

export interface IFilesState {
    isLoading: boolean;
    files: IFile[];
    error: IServerError | null;
}

export default handleActions<IFilesState, any>(
    {
        [fetchFiles.toString()]: (state) => ({ ...state, isLoading: true }),
        [fetchFilesSuccess.toString()]: (
            state,
            { payload }: Action<{ files: IFile[] }>
        ) => ({ ...state, files: payload.files, isLoading: false }),
        [fetchFilesError.toString()]: (
            state,
            { payload }: Action<{ error: IServerError }>
        ) => ({ ...DEFAULT_STATE, error: payload.error }),
    },
    DEFAULT_STATE,
);
