import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  USER_NOT_FOUND,
  INCORRECT_PASSWORD,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
} from "./login.state";

import axios from "axios";
import Cookies from "universal-cookie";

// For Development - use local backend
// axios.defaults.baseURL = "http://localhost:3001/user/";

// For Production - use deployed backend
axios.defaults.baseURL = "https://admin-dashboard-api-vpyv.onrender.com/user/";

const loginFunction = (input) => {
  console.log(input);

  return async (setDispatch) => {
    try {
      setDispatch({
        type: LOGIN_REQUEST,
      });

      let response = await axios({
        method: "post",
        url: "/login",
        data: input,
        withCredentials: true
      });

      setDispatch({
        type: LOGIN_SUCCESS,
        payLoad: response.data,
      });
    } catch (error) {
      console.log(error);
      if (error.status === 401) {
        setDispatch({
          type: INCORRECT_PASSWORD,
        });
      }

      if (error.status === 404) {
        setDispatch({
          type: USER_NOT_FOUND,
        });
      }
    }
  };
};

const LogoutFunction = (id) => {
  return async (setDispatch) => {
    try {
      const cookie = new Cookies();
      const user =  JSON.parse(sessionStorage.getItem("userDetails")) ;
      const ID = user.userId
      let response = await axios({
        method: "get",
        url: "/logout/" + ID,
        withCredentials: true
      });

      cookie.remove("authToken");
      sessionStorage.removeItem("userDetails");

      setDispatch({
        type: LOGOUT_SUCCESS,
      });
    } catch (error) {
      setDispatch({
        type: LOGOUT_FAILED,
      });
    }
  };
};

export { loginFunction, LogoutFunction };
