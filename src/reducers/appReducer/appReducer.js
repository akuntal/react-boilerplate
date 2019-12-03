import Immutable from 'seamless-immutable';
import { createReducer } from '../../utils/createReducer';
import { APP_INIT } from '../../actions/actionAppInit';
import { FETCH_TODOS } from '../../actions/actionFetchTodos';

const initialState = Immutable({
  todos: []
}); // initial state of appReducer

export const appReducer = createReducer(initialState, {
  // eslint-disable-next-line no-unused-vars
  [APP_INIT]: (state, action) => state,
  [FETCH_TODOS.SUCCEEDED]: (state, action) => ({
    ...state,
    todos: action.payload
  })
});
