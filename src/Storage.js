import { applyMiddleware, createStore  ,combineReducers} from "@reduxjs/toolkit";
import logger from "redux-logger";  
import { thunk } from "redux-thunk";
import applyDarkMode from "./Component/Admin-panel/admindark.action";
import signupReducer from "./Component/Signup/signup.reducer";
import loginReducer from "./Component/Login/login.reducer";

const middleware =   applyMiddleware(logger , thunk)


const Root = combineReducers({
              applyDarkMode , 
              signupReducer, 
              loginReducer
             })





const storage   =  createStore(Root , {} , middleware ) 




export default storage ;