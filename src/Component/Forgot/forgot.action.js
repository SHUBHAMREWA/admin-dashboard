import { 
    FORGOT_REQUEST , 
    REQUEST_SUCCESS ,
    REQUEST_FAILED ,
    FORGOT_SUCCESS ,
    FORGOT_FAILED ,
    PASSWORD_CHANGE_REQUEST
 } from "./forgot.state";


 import axios from "axios"  ;

 // For Development - use local backend
 // axios.defaults.baseURL = "http://localhost:3001/user/";

 // For Production - use deployed backend
 axios.defaults.baseURL = "https://admin-dashboard-api-vpyv.onrender.com/user/";

const forgotRequest = (email)=>{

    return async(setDispatch)=>{

          try{
              setDispatch({
                type : FORGOT_REQUEST
             } )
            let response = await axios({
                             method : "post" ,
                             url    : "/forgot-password", 
                             data : {
                                email : email
                             },
                             withCredentials: true
                             })

            // Store the OTP token so we can send it with the reset-password request
            if (response?.data?.token) {
                sessionStorage.setItem("forgotToken", response.data.token);
            }
             
             setDispatch({
                                  type  : REQUEST_SUCCESS
             })                      

          }
          catch{
             
            setDispatch({
                type : REQUEST_FAILED
            })
          }
    }
}





const updateRequest = (formdata)=>{  
           
    return async(setDispatch)=>{
         
        try{
            setDispatch({
                 type : PASSWORD_CHANGE_REQUEST
            })

            const token = sessionStorage.getItem("forgotToken");

            const response = await axios({
                  method  : "put"  ,
                  url     : "/forgot-password", 
                  data : formdata,
                  headers: token ? { forgotauth: token } : {},
                  withCredentials: true
            })

            console.log(response)

            if(response.data.success){
                 
            setDispatch({
                  type : FORGOT_SUCCESS
            })
            }else{
                throw new Error("Yeh meri custom error hai!");
            }
         

        }
        catch(error){

            setDispatch({
                 type : FORGOT_FAILED
            })
             
        }

    }


}





export {
      forgotRequest , 
      updateRequest 
}