import { combineReducers } from 'redux';
import flagReducer from 'components/flag/flagReducer';
import homeReducer from 'components/home/homeReducer';

export default combineReducers({
  flagReducer,
  homeReducer,
});
