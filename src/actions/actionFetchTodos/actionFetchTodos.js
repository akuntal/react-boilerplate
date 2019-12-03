import { createApiStateConstants } from '../../utils/createApiStateConstants';

export const FETCH_TODOS = createApiStateConstants('FETCH_TODOS');

export const actionFetchTodos = payload => ({
  type: FETCH_TODOS.STARTED,
  payload
});
