import update from 'immutability-helper';
import * as actions from './actions';
import * as constants from './constants';

const initState = {
  login: '',
  password: '',
  requestStatus: '',
  errorMessage: '',
};

export default function (state = initState, action) {
  switch (action.type) {
    case actions.CHANGE_LOGIN:
      return update(state, {
        login: { $set: action.payload },
      });

    case actions.CHANGE_PASSWORD:
      return update(state, {
        password: { $set: action.payload },
      });

    case actions.REQUEST_AUTH:
      return update(state, {
        requestStatus: { $set: constants.requestStatus.REQUESTING },
        errorMessage: { $set: initState.errorMessage },
      });

    case actions.SUCCESS_AUTH:
      return update(state, {
        status: { $set: constants.auth.SUCCESS },
        errorMessage: { $set: initState.errorMessage },
        requestStatus: { $set: initState.requestStatus },
      });

    case actions.FAILURE_AUTH:
      return update(state, {
        status: { $set: constants.auth.FAILURE },
        errorMessage: { $set: action.payload },
        requestStatus: { $set: initState.requestStatus },
      });

    default:
      return state;
  }
}
