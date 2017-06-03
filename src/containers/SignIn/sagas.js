import { delay } from 'redux-saga';
import { fork, call, put, take } from 'redux-saga/effects';
import * as actions from './actions';

function* signIn() {
  while (true) {
    const { payload: { login, password } } = yield take(actions.REQUEST_AUTH);
    yield call(delay, 1000);
    if (login && login === password) {
      yield put(actions.successAuth());
    } else {
      yield put(actions.failureAuth('Login and password is different or empty'));
    }
  }
}

export default function* () {
  yield fork(signIn);
}
