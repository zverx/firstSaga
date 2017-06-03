import { createAction } from 'redux-actions';

export const CHANGE_LOGIN = 'CHANGE_LOGIN';
export const changeLogin = createAction(CHANGE_LOGIN);

export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const changePassword = createAction(CHANGE_PASSWORD);

export const REQUEST_AUTH = 'REQUEST_AUTH';
export const requestAuth = createAction(REQUEST_AUTH);

export const SUCCESS_AUTH = 'SUCCESS_AUTH';
export const successAuth = createAction(SUCCESS_AUTH);

export const FAILURE_AUTH = 'FAILURE_AUTH';
export const failureAuth = createAction(FAILURE_AUTH);
