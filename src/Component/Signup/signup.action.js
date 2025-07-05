import {  SIGNUP_ERROR ,
       SIGNUP_REQUEST ,
       SIGNUP_SUCCESS  } from "./signup.state";

import axios from "axios";


// For Development - use local backend
// axios.defaults.baseURL = "http://localhost:3001/user/";

// For Production - use deployed backend  
axios.defaults.baseURL = "https://admin-dashboard-api-vpyv.onrender.com/user/";


const signupRequest = (formData)=>{

    console.log(formData)
         return async(setDispatch)=>{
                  
                 try{ 
                       setDispatch({
                          type : SIGNUP_REQUEST
                       })

                       const response = await axios({
                                         method : "post" ,
                                         url  : "/signup" ,
                                         data : formData,
                                         withCredentials: true
                                                     })
                    
                       setDispatch({ 
                          type     :  SIGNUP_SUCCESS ,
                          payLoad  :  response.data
                       })

                 }
                 catch(error){

                       setDispatch({
                         type : SIGNUP_ERROR ,
                         payLoad : error.response.data.message 
                       })

                 }

         }
       

}

export default signupRequest ;