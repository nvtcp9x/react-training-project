import { call, takeLatest, put } from 'redux-saga/effects'
import { GET_USER_INFO, GET_USER_INFO_SUCCESS, UPDATE_LOGGED_STATUS } from 'components/header/constants'
import Api from 'setting/api'

export function* getUserWorkerData(action) {
  try {
    const user = yield call(Api.getUserInfo, action.payload);
    yield put({ type: GET_USER_INFO_SUCCESS, userInfo: user.data });
    yield put({ type: UPDATE_LOGGED_STATUS, logged: true });
  } catch (error) {
    if (error.response.status === 401) {
      yield put({ type: UPDATE_LOGGED_STATUS, logged: false });
    }
  }
}

export default [
  takeLatest(GET_USER_INFO, getUserWorkerData),
]
