import axios from 'axios'
import config from './configApi'
import auth from './authen'

export default {
  login: (user, password) => (
    axios({
      method: 'POST',
      url: `${config.api}/${config.login}`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        email: user,
        password,
      },
    })
  ),
  getUserInfo: (userId) => {
    const token = auth.getAccessToken()
    return (
      axios({
        method: 'GET',
        url: `${config.api}/${config.getUserInfo}/${userId}`,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
    )
  },
}
