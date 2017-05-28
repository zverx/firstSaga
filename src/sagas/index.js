import { fork } from 'redux-saga/effects';
import auth from './auth';
import app from './app';

export default function* () {
  yield fork(auth);
  yield fork(app);
}
