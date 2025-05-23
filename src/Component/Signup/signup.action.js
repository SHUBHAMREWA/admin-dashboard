import {  SIGNUP_ERROR ,
       SIGNUP_REQUEST ,
       SIGNUP_SUCCESS  } from "./signup.state";

import axios from "axios";


axios.defaults.baseURL = "http://localhost:3030" 


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
                                         data : formData
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