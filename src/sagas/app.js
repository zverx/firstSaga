import { delay } from 'redux-saga';
import { fork, call, put, take } from 'redux-saga/effects';
import * as actions from './../actions';

function* runSteps() {
  while (true) {
    yield take(actions.REQUEST_STEPS);

    yield put.resolve(actions.requestStep1('step1'));
    yield call(delay, 2000);

    yield put.resolve(actions.requestStep2('step2'));
    yield call(delay, 2000);

    yield put.resolve(actions.requestStep3('step3'));
    yield call(delay, 2000);

    yield put(actions.resultSteps('result'));
  }
}

export default function* () {
  yield fork(runSteps);
}
