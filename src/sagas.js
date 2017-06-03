import { fork } from 'redux-saga/effects';
import signin from './containers/SignIn/sagas';
import steps from './containers/Steps/sagas';

export default function* () {
  yield fork(signin);
  yield fork(steps);
}
