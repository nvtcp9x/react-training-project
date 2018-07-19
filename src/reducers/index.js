import { combineReducers } from 'redux';
import flagReducer from 'components/flag/flagReducer';
import loginReducer from 'components/login/loginReducer';
import headerReducer from 'components/header/headerReducer';

export default combineReducers({
  flagReducer,
  loginReducer,
  headerReducer,
});
