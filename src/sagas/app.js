import { delay } from 'redux-saga';
import { fork, call, put, take } from 'redux-saga/effects';
import * as actions from './../actions';

function* step() {
  yield call(delay, 1000);
  if (Math.random() > 0.5) {
    throw new Error('failure');
  }
}

function* runSteps() {
  while (true) {
    yield take(actions.REQUEST_STEPS);

    try {
      yield call(step);
      yield put.resolve(actions.requestStep1('step1'));

      yield call(step);
      yield put.resolve(actions.requestStep2('step2'));

      yield call(step);
      yield put.resolve(actions.requestStep3('step3'));

      yield put.resolve(actions.resultSteps('success'));
    } catch (error) {
      yield put.resolve(actions.failureSteps(error.message));
    }
  }
}

export default function* () {
  yield fork(runSteps);
}
