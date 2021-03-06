// @flow

import { call, put, takeLatest } from 'redux-saga/effects';
import type { IOEffect } from 'redux-saga/effects';

import {
  authRegister,
  confirmation,
  authSignIn,
  getLocalUser,
  authSignOut,
  getSession,
  config,
} from './aws-cognito-promises';

import type {
  ActionLogIn,
  ActionLogOut,
  ActionSignUp,
  ActionLoadSession,
} from './types';

import * as actions from './actions';

// eslint-disable-next-line no-unused-vars
function* loadSession(action: ActionLoadSession) {
  try {
    yield call(getSession);
    const user = yield call([config, config.getUser]);
    yield put(actions.loadSessionSuccess({ info: user }));
  } catch (e) {
    yield put(actions.loadSessionFailed(e));
  }
}

function* signUp(action: ActionSignUp) {
  try {
    const { email, password, locale, phoneNumber } = action.payload;

    yield call(authRegister, email, password, locale, phoneNumber);

    yield put(actions.setState({ hasSignedUp: true }));
  } catch (e) {
    yield put(actions.resetState({ error: e }));
  }
}

// eslint-disable-next-line no-unused-vars
function* logOut(action: ActionLogOut) {
  try {
    yield call(authSignOut);
    yield put(actions.logOutSuccess());
  } catch (e) {
    yield put(actions.logOutFailed(e));
  }
}

function* logIn(action: ActionLogIn) {
  try {
    const { email, password, code, newPassword } = action.payload;

    if (newPassword) {
    }
    if (code) {
      yield call(confirmation, email, code);
    }

    let user = yield call(authSignIn, email, password);
    user = yield call(getLocalUser);
    yield put(actions.logInSuccess({ info: user }));
  } catch (e) {
    if (e.name === 'LogInRequireNewPasswordError') {
      yield put(
        actions.logInRequireNewPassword({
          userAttributes: e.userAttributes,
          requiredAttributes: e.requiredAttributes,
        }),
      );
    } else if (
      e.code === 'UserNotConfirmedException' ||
      e.code === 'CodeMismatchException'
    ) {
      yield put(
        actions.logInFailed({
          hasSignedUp: true,
          isConfirmed: false,
          needConfirmCode: true,
          error: e,
        }),
      );
    } else {
      yield put(
        actions.logInFailed({
          needConfirmCode: false,
          isConfirmed: true,
          error: e,
        }),
      );
    }
  }
}

export default function*(): Generator<IOEffect, *, *> {
  // yield takeLatest('@@awsCognito/CONFIRM_REGISTRATION', confirmRegistration);
  yield takeLatest('@@awsCognito/LOG_IN', logIn);
  yield takeLatest('@@awsCognito/LOG_OUT', logOut);
  yield takeLatest('@@awsCognito/LOAD_SESSION', loadSession);
  yield takeLatest('@@awsCognito/SIGN_UP', signUp);
}
