import { createAction } from 'redux-actions';

export const REQUEST_STEPS = 'REQUEST_STEPS';
export const requestSteps = createAction(REQUEST_STEPS);

export const REQUEST_STEP1 = 'REQUEST_STEP1';
export const SUCCESS_STEP1 = 'SUCCESS_STEP1';
export const requestStep1 = createAction(REQUEST_STEP1);
export const successStep1 = createAction(SUCCESS_STEP1);

export const REQUEST_STEP2 = 'REQUEST_STEP2';
export const SUCCESS_STEP2 = 'SUCCESS_STEP2';
export const requestStep2 = createAction(REQUEST_STEP2);
export const successStep2 = createAction(SUCCESS_STEP2);

export const REQUEST_STEP3 = 'REQUEST_STEP3';
export const SUCCESS_STEP3 = 'SUCCESS_STEP3';
export const requestStep3 = createAction(REQUEST_STEP3);
export const successStep3 = createAction(SUCCESS_STEP3);

export const SUCCESS_STEPS = 'SUCCESS_STEPS';
export const successSteps = createAction(SUCCESS_STEPS);

export const FAILURE_STEPS = 'FAILURE_STEPS';
export const failureSteps = createAction(FAILURE_STEPS);

