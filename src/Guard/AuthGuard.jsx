import { Outlet } from "react-router-dom";
import Cookies from "universal-cookie"   ;
import { useAsync } from "react-async";
import axios from "axios"          
import { useState } from "react";
import { useNavigate } from "react-router-dom";

axios.defaults.baseURL  = "https://admin-d-api-1.onrender.com"


const checkUser  = async({Token , setResponse })=>{

    try{
        const response =  await axios({
                                 method : "get"  ,
                                  url  :  `/verify-token/`+Token
                                    })

          //  console.log(response.data.data.data)
           sessionStorage.setItem("userDetails" , JSON.stringify(response.data.data.data))    

           setResponse(response.data.data.data) 

           return response.data.verified ;


    }
    catch(error){

        throw new Error(error.response.data.verified)
    }

}


const AuthGuard  = ()=>{

    const navigate = useNavigate()

    const cookie   = new Cookies() ;
    const Token  =   cookie.get("authToken") ;
    const [response , setResponse] = useState(null)

     const { data, error, isPending }  = useAsync({
                                                promiseFn  : checkUser ,  
                                                  Token    , 
                                                 setResponse 
                                              })



     if(!response){   
        return(
           
             <div style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.5rem",
        fontWeight: "bold"
      }}>
        Loading...
      </div>
    )}

    if(response){
         return (
            <Outlet/>
         )
    }
    if(!Token){
          navigate("/login")
    }




     }
   


   





export default AuthGuard ;