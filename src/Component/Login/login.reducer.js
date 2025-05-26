import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  USER_NOT_FOUND,
  INCORRECT_PASSWORD,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
} from "./login.state";

const model = {
  isLoading: false,
  success: false,
  usernotfound: false,
  incorrectpassword: false,
  data: null,
  logout: false,
  loutoutfailed: false,
};

const loginReducer = (state = model, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        success: false,
        usernotfound: false,
        incorrectpassword: false,
        logout: false,
        loutoutfailed: false,
        data: null,
      };

    case USER_NOT_FOUND:
      return {
        ...state,
        isLoading: false,
        success: false,
        usernotfound: true,
        incorrectpassword: false,
        logout: false,
        loutoutfailed: false,
        data: null,
      };

    case INCORRECT_PASSWORD:
      return {
        ...state,
        isLoading: false,
        success: false,
        usernotfound: false,
        incorrectpassword: true,
        logout: false,
        loutoutfailed: false,
        data: null,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        usernotfound: false,
        incorrectpassword: false,
        logout: false,
        loutoutfailed: false,
        data: action.payLoad,
      };

    case LOGOUT_SUCCESS :
      return {
        ...state,
        isLoading: false,
        success: false,
        usernotfound: false,
        incorrectpassword: false,
        logout: true,
        loutoutfailed: false,
        data: null,
      };

    case LOGOUT_FAILED:
      return {
        ...state,
        isLoading: false,
        success:  false,
        usernotfound: false,
        incorrectpassword: false,
        logout: false,
        loutoutfailed: true,
        data: null,
      };
    default:
      return state;
  }
};

export default loginReducer;
