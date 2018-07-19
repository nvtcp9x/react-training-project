const initialState = {
  userInfo: {},
  logged: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER_INFO_SUCCESS':
      return {
        ...state,
        userInfo: action.userInfo,
      }
    case 'UPDATE_LOGGED_STATUS':
      return {
        ...state,
        logged: action.logged,
      }
    default:
      return state
  }
}

export default loginReducer;
