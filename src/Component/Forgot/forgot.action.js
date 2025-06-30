import { 
    FORGOT_REQUEST , 
    REQUEST_SUCCESS ,
    REQUEST_FAILED ,
    FORGOT_SUCCESS ,
    FORGOT_FAILED ,
    PASSWORD_CHANGE_REQUEST
 } from "./forgot.state";


 import axios from "axios"  ;
 import Cookies from "universal-cookie";

 const cookie = new Cookies();


 axios.defaults.baseURL = "https://admin-dashboard-api-vpyv.onrender.com/user"

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
                             } 
                            } 
                        
                                    )
               cookie.set("forgotauth" , response.data.token , {
                path : "/" ,
                maxAge : 60 * 60 * 24 ,
                secure : true ,
                sameSite : "strict"
               })

             
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

            const token = cookie.get("forgotauth") ;

            const response = await axios({
                  method  : "put"  ,
                  url     : "/forgot-password", 
                  data : formdata ,
                  headers: {
                     forgotauth : token  // agar auth chahiye ho to
                   } 
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