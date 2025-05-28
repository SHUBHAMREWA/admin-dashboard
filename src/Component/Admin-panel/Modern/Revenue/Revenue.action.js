
import { 
      REVENUE_REQUEST , 
    REVENUE_SUCCESS ,
    REVENUE_FAILED 
    }  from "./Revenue.state";

import axios from "axios"  ;


axios.defaults.baseURL = "http://localhost:3030"


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


          
                setDispatch({
                  type  : REVENUE_SUCCESS ,
                  payLoad :  response.data
                 })
 

            }
            catch(error){
                  
                setDispatch({
                    type : REVENUE_FAILED
                })
  
            }

        }



}

export default revenueFunction ;