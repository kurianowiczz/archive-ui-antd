import {applyMiddleware, createStore} from 'redux';
import reducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import saga from './saga';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const getEnhancers = () => applyMiddleware(sagaMiddleware);

const store = createStore(reducer, composeWithDevTools(getEnhancers()));
sagaMiddleware.run(saga);

export type IGlobalState = ReturnType<typeof reducer>;

export default store;
