import Immutable from 'seamless-immutable';
import { createReducer } from '../../utils/createReducer';
import { APP_INIT } from '../../actions/actionAppInit';

const initialState = Immutable({}); // initial state of appReducer

export const appReducer = createReducer(initialState, {
  // eslint-disable-next-line no-unused-vars
  [APP_INIT]: (state, action) => state,
});
