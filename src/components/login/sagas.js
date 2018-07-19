import { call, takeLatest, put } from 'redux-saga/effects'
import {
  LOGIN,
  LOGIN_FAIL,
  LOGOUT,
} from 'components/login/constants'
import {
  GET_USER_INFO_SUCCESS,
  UPDATE_LOGGED_STATUS,
} from 'components/header/constants'
import Api from 'setting/api'

export function* loginWorkerData(action) {
  try {
    const user = yield call(Api.login, action.payload.user, action.payload.password);
    const userInfo = {
      id: user.data.userId,
      token: user.data.access_token,
    }
    localStorage.setItem('info', JSON.stringify(userInfo))
    const fetchedInfo = yield call(Api.getUserInfo, userInfo.id);
    yield put({ type: GET_USER_INFO_SUCCESS, userInfo: fetchedInfo.data });
    yield put({ type: UPDATE_LOGGED_STATUS, logged: true })
  } catch (error) {
    yield put({ type: LOGIN_FAIL, message: error.message });
  }
}

export function* logoutWorkerData() {
  try {
    yield put({ type: UPDATE_LOGGED_STATUS, logged: false })
  } catch (error) { // eslint-disable-line
  } // eslint-disable-line
}

export default [
  takeLatest(LOGIN, loginWorkerData),
  takeLatest(LOGOUT, logoutWorkerData),
]
