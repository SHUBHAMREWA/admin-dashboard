import { 
    FORGOT_REQUEST , 
    REQUEST_SUCCESS ,
    REQUEST_FAILED ,
    FORGOT_SUCCESS ,
    FORGOT_FAILED ,
    PASSWORD_CHANGE_REQUEST
 } from "./forgot.state";


 import axios from "axios"  ;

 axios.defaults.baseURL = "https://admin-d-api-1.onrender.com"

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
                             } }
                                    )
             
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

            const response = await axios({
                  method  : "put"  ,
                  url     : "/forgot-password", 
                  data : formdata
            })
           console.log("updated")
            setDispatch({
                  type : FORGOT_SUCCESS
            })

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