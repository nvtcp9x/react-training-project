const initialState = {
  userName: '',
  message: '',
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_FAIL':
      return {
        ...state,
        message: action.message,
      }
    default:
      return state
  }
}

export default loginReducer;
