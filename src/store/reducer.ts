import { combineReducers } from 'redux';
import users from './users/reducer';
import files from './files/reducer';

export default combineReducers({
    users,
    files,
});
