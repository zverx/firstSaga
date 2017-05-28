import { createAction } from 'redux-actions';

export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN';
export const FAILURE_LOGIN = 'FAILURE_LOGIN';
export const requestLogin = createAction(REQUEST_LOGIN);
export const successLogin = createAction(SUCCESS_LOGIN);
export const failureLogin = createAction(FAILURE_LOGIN);

export const REQUEST_STEPS = 'REQUEST_STEPS';
export const requestSteps = createAction(REQUEST_STEPS);

export const REQUEST_STEP1 = 'REQUEST_STEP1';
export const SUCCESS_STEP1 = 'SUCCESS_STEP1';
export const FAILURE_STEP1 = 'FAILURE_STEP1';
export const requestStep1 = createAction(REQUEST_STEP1);
export const successStep1 = createAction(SUCCESS_STEP1);
export const failureStep1 = createAction(FAILURE_STEP1);

export const REQUEST_STEP2 = 'REQUEST_STEP2';
export const SUCCESS_STEP2 = 'SUCCESS_STEP2';
export const FAILURE_STEP2 = 'FAILURE_STEP2';
export const requestStep2 = createAction(REQUEST_STEP2);
export const successStep2 = createAction(SUCCESS_STEP2);
export const failureStep2 = createAction(FAILURE_STEP2);

export const REQUEST_STEP3 = 'REQUEST_STEP3';
export const SUCCESS_STEP3 = 'SUCCESS_STEP3';
export const FAILURE_STEP3 = 'FAILURE_STEP3';
export const requestStep3 = createAction(REQUEST_STEP3);
export const successStep3 = createAction(SUCCESS_STEP3);
export const failureStep3 = createAction(FAILURE_STEP3);

export const RESULT_STEPS = 'RESULT_STEPS';
export const resultSteps = createAction(RESULT_STEPS);

