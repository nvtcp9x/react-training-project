import { connect } from 'react-redux'
import Header from '../component/headerComponent'
import { getUserInfo } from '../actions'

const mapStateToProps = state => ({
  userInfo: state.headerReducer.userInfo,
  logged: state.headerReducer.logged,
})

const mapDispatchToProps = {
  getUserInfo,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header)
