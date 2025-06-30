import { 
      REVENUE_REQUEST , 
    REVENUE_SUCCESS ,
    REVENUE_FAILED 
    }  from "./Revenue.state";

import axios from "axios"  ;


axios.defaults.baseURL = "https://admin-dashboard-api-vpyv.onrender.com/user"


const revenueFunction = ()=>{

        return async(setDispatch)=>{
                     
            
            try{

                setDispatch({
                     type : REVENUE_REQUEST
                })

              let response = await axios({
                              method : "get" ,
                              url : "revenue-updates"
                })

                // console.log(response.data)

                  
                setTimeout(()=>{

                           setDispatch({
                  type  : REVENUE_SUCCESS ,
                  payLoad :  response.data
                 })


                } , 1000)
          
         
 

            }
            catch(error){
                  
                setDispatch({
                    type : REVENUE_FAILED
                })
  
            }

        }



}

export default revenueFunction ;