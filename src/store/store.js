import Immutable from 'seamless-immutable';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { appReducer } from '../reducers/appReducer';

const reducers = combineReducers({ appState: appReducer });

const enhancers = [];

const middleware = [];

const initialState = Immutable({}); // application initial state

const composedEnhancers = composeWithDevTools(applyMiddleware(...middleware), ...enhancers);

export const store = createStore(reducers, initialState, composedEnhancers);
