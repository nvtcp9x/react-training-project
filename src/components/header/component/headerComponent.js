import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import auth from 'setting/authen'

class Header extends React.Component {
  componentDidMount() {
    const isLogin = auth.loggedIn()
    let userId = {}
    if (isLogin) {
      const { getUserInfo } = this.props
      userId = auth.getUserId()
      getUserInfo(userId)
    }
  }

  render() {
    const { logged, userInfo } = this.props
    return (
      <div>
        {logged ? (
          <ul>
            <li>
              {userInfo.id}
            </li>
            <li>
              {userInfo.name}
            </li>
            <li>
              {userInfo.email}
            </li>
          </ul>
        )
          : ''}
        <ul>
          <li>
            <Link to="/">
              Public Route Home
            </Link>
          </li>
          <li>
            <Link to="/topics">
              Neste Route Topics
            </Link>
          </li>
          <li>
            <Link to="/flag">
              Authentication Route Flag
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

Header.propTypes = {
  getUserInfo: PropTypes.func,
  logged: PropTypes.bool,
  userInfo: PropTypes.shape({}),
};

export default Header;
