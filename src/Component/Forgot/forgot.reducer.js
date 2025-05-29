import {
  FORGOT_REQUEST,
  FORGOT_SUCCESS,
  FORGOT_FAILED,
  REQUEST_SUCCESS,
  REQUEST_FAILED,
  PASSWORD_CHANGE_REQUEST,
} from "./forgot.state";

const model = {
  isLoading: false,
  requestsend: false,
  requstfail: false,
  error: false,
  updated: false,
};

const forgotReducer = (state = model, action) => {
  switch (action.type) {
    case FORGOT_REQUEST:
      return {
        ...state,
        requestsend: false,
        isLoading: true,
        requstfail: false,
        updated: false,
        error: false,
      };
    case REQUEST_SUCCESS:
      return {
        ...state,
        requestsend: true,
        isLoading: false,
        requstfail: false,
        updated: false,
        error: false,
      };
    case REQUEST_FAILED:
      return {
        ...state,
        requestsend: false,
        isLoading: false,
        requstfail: true,
        updated: false,
        error: false,
      };
    case FORGOT_SUCCESS:
      return {
        ...state,
        requestsend: true,
        isLoading: false,
        updated: true,
        requstfail: false,
        error: false,
      };
    case PASSWORD_CHANGE_REQUEST:
      return {
        ...state,
        requestsend: true,
        isLoading: true,
        updated: false,
        requstfail: false,
        error: false,
      };
    case FORGOT_FAILED:
      return {
        ...state,
        requestsend: true,
        isLoading: false,
        requstfail: false,
        updated: false,
        error: true,
      };

    default:
      return state;
  }
};

export default forgotReducer;
