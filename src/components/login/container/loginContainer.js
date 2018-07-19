import { connect } from 'react-redux'
import Login from '../component/loginComponent'
import { login, logout } from '../actions'

const mapStateToProps = state => ({
  logged: state.headerReducer.logged,
  userName: state.loginReducer.userName,
})

const mapDispatchToProps = {
  login,
  logout,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login)
