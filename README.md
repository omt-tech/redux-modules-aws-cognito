# redux-modules-aws-cognito

[![Generated with nod](https://img.shields.io/badge/generator-nod-2196F3.svg?style=flat-square)](https://github.com/diegohaz/nod)
[![NPM version](https://img.shields.io/npm/v/redux-modules-aws-cognito.svg?style=flat-square)](https://npmjs.org/package/redux-modules-aws-cognito)
[![Build Status](https://img.shields.io/travis/omt-tech/redux-modules-aws-cognito/master.svg?style=flat-square)](https://travis-ci.org/omt-tech/redux-modules-aws-cognito) [![Coverage Status](https://img.shields.io/codecov/c/github/omt-tech/redux-modules-aws-cognito/master.svg?style=flat-square)](https://codecov.io/gh/omt-tech/redux-modules-aws-cognito/branch/master)

AWS Cognito for React apps using redux and redux-saga.

## Install

    $ npm install --save redux-modules-aws-cognito

## Usage

```js
import myModule from 'redux-modules-aws-cognito'

myModule()
```

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### lastAuthUserAccessToken

LAST AUTH USER TOKENS

### userSession

USER SESSION

### userSessionAccessToken

USER SESSION TOKENS

### userAccessToken

DEFAULT SESSION TOKENS

NOTE setting this up to return userSession tokens if available and then return
     lastAuthUser tokens if not.

NOTE for now I am using what is in storage pool until I understand how to
     properly use tokens in different scenarios (loading session from local
     storage & logging in)

### State

Action Payloads

Type: {info: {user: {}?, signInUserSession: {idToken: {jwtToken: [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)}?, refreshToken: {token: [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)}?, accessToken: {jwtToken: [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)}?}?}, error: {message: [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)?}, hasSignedUp: [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean), isAuthenticating: [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean), isConfirmed: [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean), isAuthenticated: [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean), needConfirmCode: [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean), needMFA: [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean), needNewPassword: [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)}

**Properties**

-   `info` **{user: {}?, signInUserSession: {idToken: {jwtToken: [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)}?, refreshToken: {token: [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)}?, accessToken: {jwtToken: [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)}?}?}** 
-   `info.user` **{}?** 
-   `info.signInUserSession` **{idToken: {jwtToken: [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)}?, refreshToken: {token: [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)}?, accessToken: {jwtToken: [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)}?}?** 
-   `info.signInUserSession.idToken` **{jwtToken: [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)}?** 
-   `info.signInUserSession.idToken.jwtToken` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `info.signInUserSession.refreshToken` **{token: [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)}?** 
-   `info.signInUserSession.refreshToken.token` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `info.signInUserSession.accessToken` **{jwtToken: [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)}?** 
-   `info.signInUserSession.accessToken.jwtToken` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `error` **{message: [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)?}** 
-   `error.message` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)?** 
-   `hasSignedUp` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 
-   `isAuthenticating` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 
-   `isConfirmed` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 
-   `isAuthenticated` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 
-   `needConfirmCode` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 
-   `needMFA` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 
-   `needNewPassword` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

### PayloadLogIn

Action Payloads

Type: {email: [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), password: [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), code: [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)?, newPassword: [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)?}

**Properties**

-   `email` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `password` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `code` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)?** 
-   `newPassword` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)?** 

### ActionLoadSession

Action Types

Type: {type: `"@@awsCognito/LOAD_SESSION"`}

**Properties**

-   `type` **`"@@awsCognito/LOAD_SESSION"`** 

### Action

Action Union Type

Type: ([ActionLoadSession](#actionloadsession) | ActionLoadSessionFailed | ActionLoadSessionSuccess | ActionLogIn | ActionLogInFailed | ActionLogInSuccess | ActionLogInRequireMFA | ActionLogInRequireNewPassword | ActionLogOut | ActionLogOutFailed | ActionLogOutSuccess | ActionResetState | ActionSetState | ActionSignUp | ActionSignUpFailed | ActionSignUpSuccess)

## License

MIT © [OMT Tech](http://omt.tech/)
