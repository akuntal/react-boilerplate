import { all } from 'redux-saga/effects';
import { watchFetchTodosSaga } from './sagaFetchTodos';

export function* rootSaga() {
  yield all([watchFetchTodosSaga()]);
}
