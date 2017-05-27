import { delay } from 'redux-saga';
import { fork, call, put, take } from 'redux-saga/effects';
import * as actions from './../actions';

function* signIn() {
  while (true) {
    const { payload: { login, password } } = yield take(actions.REQUEST_LOGIN);
    yield call(delay, 3000);
    if (login && login === password) {
      yield put(actions.successLogin());
    } else {
      yield put(actions.failureLogin({ errorMessage: 'Login and password is different' }));
    }
  }
}

export default function* rootSaga() {
  yield fork(signIn);
}
