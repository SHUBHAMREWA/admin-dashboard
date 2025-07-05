import { Outlet } from "react-router-dom";
import Cookies from "universal-cookie"   ;
import { useAsync } from "react-async";
import axios from "axios"          
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// For Development - use local backend
// axios.defaults.baseURL = "http://localhost:3001/user/";

// For Production - use deployed backend
axios.defaults.baseURL = "https://admin-dashboard-api-vpyv.onrender.com/user/";


const checkUser  = async({Token , setResponse })=>{

    try{
        const response =  await axios({
                                 method : "get"  ,
                                  url  :  `/verify-token/`+Token,
                                  withCredentials: true
                                    })

           console.log(response.data.data)
           sessionStorage.setItem("userDetails" , JSON.stringify(response.data.data))    

           setResponse(response.data.data) 
              console.log(response.data.success)
          //  return response.data.success ;


    }
    catch(error){

        throw new Error(error) ;
    }

}


const AuthGuard  = ()=>{

    const navigate = useNavigate()

    const cookie   = new Cookies() ;
    const Token  =   cookie.get("authToken") ;
    const [response , setResponse] = useState(null)

      if(!Token){
          navigate("/login")
    }

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
  

   if(error){
      navigate("/login")
   }


     }
   


   





export default AuthGuard ;