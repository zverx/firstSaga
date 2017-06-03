import update from 'immutability-helper';
import * as actions from './actions';
import * as constants from './constants';

const initState = {
  requestStatus: '',
  result: '',
};

export default function (state = initState, action) {
  switch (action.type) {

    case actions.REQUEST_STEPS:
      return update(state, {
        requestStatus: { $set: constants.requestStatus.REQUESTING },
        result: { $set: initState.result },
      });

    case actions.REQUEST_STEP1:
    case actions.REQUEST_STEP2:
    case actions.REQUEST_STEP3:
      return update(state, {
        result: { $set: action.payload } });

    case actions.SUCCESS_STEPS:
      return update(state, {
        requestStatus: { $set: initState.requestStatus },
        result: { $set: action.payload },
      });

    case actions.FAILURE_STEPS:
      return update(state, {
        requestStatus: { $set: initState.requestStatus },
        result: { $set: action.payload },
      });

    default:
      break;
  }
  return state;
}
