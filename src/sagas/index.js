import { all } from 'redux-saga/effects'
import loginSagas from 'components/login/sagas'
import headerSagas from 'components/header/sagas'

export default function* rootSaga() {
  yield all([
    ...loginSagas,
    ...headerSagas,
  ])
}
