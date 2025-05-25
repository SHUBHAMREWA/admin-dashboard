
import {  LOGIN_REQUEST ,
      LOGIN_SUCCESS ,
      USER_NOT_FOUND ,
      INCORRECT_PASSWORD
      } from "./login.state";


const model = {
                isLoading : false ,
                 success  : false ,
                 usernotfound :  false ,
                 incorrectpassword : false ,
                 data : null 
}

const loginReducer = (state=model , action)=>{

      switch(action.type){
        
        case LOGIN_REQUEST : return {
                      ...state ,        
                 isLoading : true ,
                 success  : false ,
                 usernotfound :  false ,
                 incorrectpassword : false ,
                 data : null  
        }

        case  USER_NOT_FOUND : return {
                      ...state ,        
                 isLoading : false ,
                 success  : false ,
                  usernotfound :  true ,
                 incorrectpassword : false ,
                 data : null   
        }

        case  INCORRECT_PASSWORD : return {
                         ...state ,        
                 isLoading : false ,
                 success  : false ,
                  usernotfound :  false ,
                 incorrectpassword : true ,
                 data : null   
        }

        case LOGIN_SUCCESS : return { 
                       ...state ,        
                 isLoading : false ,
                 success  : true ,
                 usernotfound :  false ,
                 incorrectpassword : false ,
                 data : action.payLoad 
        }
        default : return state


      }



}

export default loginReducer    ;