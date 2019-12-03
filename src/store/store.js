import Immutable from 'seamless-immutable';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { appReducer } from '../reducers/appReducer';
import { rootSaga } from '../sagas/rootSagas';

const reducers = combineReducers({ appState: appReducer });

const enhancers = [];

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const initialState = Immutable({}); // application initial state

const composedEnhancers = composeWithDevTools(
  applyMiddleware(...middleware),
  ...enhancers
);

export const store = createStore(reducers, initialState, composedEnhancers);
sagaMiddleware.run(rootSaga);
