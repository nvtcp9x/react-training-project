import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Flag from './../component/flagComponent'
import { counterPlus, counterMinus } from './../actions'

const mapStateToProps = state => ({
  flag: state.flagReducer.flag,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  counterPlus,
  counterMinus,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Flag)
