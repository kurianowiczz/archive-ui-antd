import { createStore } from 'redux';
import reducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools());

export type IGlobalState = ReturnType<typeof reducer>;

export default store;