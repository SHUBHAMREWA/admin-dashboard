import { applyMiddleware, createStore } from "@reduxjs/toolkit";  
import applyDarkMode from "./Component/Admin-panel/admindark.action";

const storage   =  createStore(applyDarkMode )




export default storage ;