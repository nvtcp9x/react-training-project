import React from 'react';
import PropTypes from 'prop-types';
import auth from 'setting/authen';

class Login extends React.Component {
  onUserChange = (e) => {
    this.setState({
      user: e.target.value,
    })
  }

  onPasswordChange= (e) => {
    this.setState({
      password: e.target.value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { user, password } = this.state
    const { login } = this.props
    login({ user, password })
  }

  logout = () => {
    const { logout } = this.props
    auth.logout()
    logout()
  }

  renderLogged = () => (
    <div>
      <h1>
        Hello
      </h1>
      <h2>
        you are logged in
      </h2>
      <button type="button" onClick={this.logout}>
        Sign Out
      </button>
    </div>
  )

  renderNotLogged = () => (
    <div>
      <form onSubmit={this.onSubmit}>
        <input type="text" name="username" onChange={this.onUserChange} />
        <input type="password" name="password" onChange={this.onPasswordChange} />
        <button type="submit">
          Login
        </button>
      </form>
    </div>
  )

  render() {
    const { logged } = this.props
    return logged ? this.renderLogged() : this.renderNotLogged()
  }
}

Login.propTypes = {
  login: PropTypes.func,
  logout: PropTypes.func,
  logged: PropTypes.bool,
}

export default Login;
