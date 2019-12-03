import { put, takeLatest } from 'redux-saga/effects';
import { FETCH_TODOS } from '../../actions/actionFetchTodos';

function* fetchTodos() {
  try {
    const data = yield fetch(
      'https://jsonplaceholder.typicode.com/todos'
    ).then(response => response.json());

    yield put({
      type: FETCH_TODOS.SUCCEEDED,
      payload: data
    });
  } catch (error) {
    console.error(error);
    yield put({ type: FETCH_TODOS.FAILED, payload: error });
  }
}

export function* watchFetchTodosSaga() {
  yield takeLatest(FETCH_TODOS.STARTED, fetchTodos);
}
