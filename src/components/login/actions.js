import { LOGIN, LOGOUT } from './constants'

export const login = payload => ({
  type: LOGIN,
  payload,
})

export const logout = () => ({
  type: LOGOUT,
})
