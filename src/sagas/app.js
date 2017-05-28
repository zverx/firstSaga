import { delay } from 'redux-saga';
import { fork, call, put, take } from 'redux-saga/effects';
import * as actions from './../actions';

function* runSteps() {
  while (true) {
    yield take(actions.REQUEST_STEPS);

    yield put(actions.requestStep1());
    yield call(delay, 2000);

    yield put(actions.requestStep2());
    yield call(delay, 2000);

    yield put(actions.requestStep3());
    yield call(delay, 2000);

    yield put(actions.resultSteps());
  }
}

export default function* () {
  yield fork(runSteps);
}
