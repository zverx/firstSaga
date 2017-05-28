import { delay } from 'redux-saga';
import { fork, call, put, take } from 'redux-saga/effects';
import * as actions from './../actions';

function* step(stepName) {
  if (Math.random() > 0.5) {
    throw new Error(`failure on ${stepName}`);
  }
}

function* runSteps() {
  while (true) {
    yield take(actions.REQUEST_STEPS);
    yield call(delay, 1000);

    try {
      yield call(step, 'step1');
      yield put.resolve(actions.requestStep1('step1'));
      yield call(delay, 1000);

      yield call(step, 'step2');
      yield put.resolve(actions.requestStep2('step2'));
      yield call(delay, 1000);

      yield call(step, 'step3');
      yield put.resolve(actions.requestStep3('step3'));
      yield call(delay, 1000);

      yield put.resolve(actions.resultSteps('success'));
    } catch (error) {
      yield put.resolve(actions.failureSteps(error.message));
    }
  }
}

export default function* () {
  yield fork(runSteps);
}
