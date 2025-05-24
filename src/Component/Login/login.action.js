
import {  LOGIN_REQUEST ,
      LOGIN_SUCCESS ,
      USER_NOT_FOUND ,
      INCORRECT_PASSWORD
      } from "./login.state";

import axios from "axios"  ;


axios.defaults.baseURL  = "http://localhost:3030"  ;

const loginFunction = (input)=>{

    console.log(input)

    return async(setDispatch)=>{
 
        try{  
               setDispatch({
                 type : LOGIN_REQUEST , 
               })
                
               let response = await axios( {
                             method : "post" ,
                             url   : "/login" ,
                             data :  input
               }) 

               setDispatch({
                  type : LOGIN_SUCCESS ,
                  payLoad : response.data
               })
              

        }
        catch(error){
            console.log(error)
               if(error.status === 401){
                     setDispatch({
                         type : INCORRECT_PASSWORD 
                     })
               }
            
               if(error.status === 404){
                    setDispatch({
                        type : USER_NOT_FOUND
                    })
               }

        }


    }


}


export default loginFunction ;