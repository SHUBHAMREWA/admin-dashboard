import { SIGNUP_ERROR, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./signup.state";

const model = {
  isLoading: false,
  data: null,
  error: false,
  success : false
};

const signupReducer = (state = model, action) => {

  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true,
        data: null,
        error: false,
        success : false

      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payLoad,
        error: false,
        success : true
      }
    case SIGNUP_ERROR:
      return {
        ...state,
        isLoading: false,
        data: action.payLoad,
        error: true ,
        success : false
      };
    default:
      return state;
  }
};

export default signupReducer;
