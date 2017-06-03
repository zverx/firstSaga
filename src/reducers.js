import { combineReducers } from 'redux';
import signIn from './containers/SignIn/reducer';
import steps from './containers/Steps/reducer';

export default combineReducers({
  signIn,
  steps,
});
