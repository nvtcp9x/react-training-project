import { GET_USER_INFO } from './constants'

export const getUserInfo = payload => ({
  type: GET_USER_INFO,
  payload,
})
