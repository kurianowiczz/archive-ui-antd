import { handleActions } from 'redux-actions';

import { appReady } from './actions';
import IUser from '../../interfaces/IUser';
import { user as mockUser } from '../../mocks/user';

const DEFAULT_STATE: IAppState = {
    user: mockUser,
};

export interface IAppState {
    user: IUser | null;
}

export default handleActions<IAppState, any>(
    {
        [appReady.toString()]: () => ({ ...DEFAULT_STATE }),
    },
    DEFAULT_STATE,
);