import { delay } from 'redux-saga';
import { takeEvery, call, put } from 'redux-saga/effects';
import * as actions from './actions';

function* signIn(action) {
  try {
    const { login, password } = action.payload;
    yield call(delay, 1000);
    if (login && login === password) {
      yield put(actions.successAuth());
    } else {
      yield put(actions.failureAuth('Login and password is different or empty'));
    }
  } catch (error) {
    yield put(actions.failureAuth(error.message));
  }
}

export default function* () {
  yield takeEvery(actions.REQUEST_AUTH, signIn);
}
