import { combineReducers } from 'redux';
import update from 'immutability-helper';
import * as actions from './actions';

const initial = {
  app: {
    status: '',
    error: {},
  },
  auth: {
    login: '',
    password: '',
    status: '',
    errorMessage: '',
  },
};

function app(state = initial.app, action) {
  switch (action.type) {

    case actions.REQUEST_STEPS:
      return update(state, { status: { $set: 'requesting' } });

    case actions.RESULT_STEPS:
      return update(state, { status: { $set: '' } });

    default:
      break;
  }
  return state;
}

function auth(state = initial.auth, action) {
  switch (action.type) {
    case actions.REQUEST_LOGIN:
      const resetState = { ...initial.auth };
      resetState.login = action.payload.login;
      resetState.password = action.payload.password;
      resetState.status = 'request';
      return update(state, { $set: resetState });

    case actions.SUCCESS_LOGIN:
      return update(state, { status: { $set: 'success' } });

    case actions.FAILURE_LOGIN:
      return update(state, {
        status: { $set: 'failure' },
        errorMessage: { $set: action.payload.errorMessage },
      });

    default:
      break;
  }
  return state;
}

export default combineReducers({
  app,
  auth,
});
