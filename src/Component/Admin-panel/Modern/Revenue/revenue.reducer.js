import { REVENUE_FAILED  ,
         REVENUE_SUCCESS ,
         REVENUE_REQUEST

 } from "./Revenue.state";

 const model = {
        isLoading  : null  ,
         data  :  null , 
         error : false , 
         success : false
 }

const revenueReducer = (state=model , action)=>{  
       
        switch(action.type){
            case REVENUE_REQUEST : return {
                    ...state ,
                     isLoading  : true  ,
                    data  :  null , 
                    error : false , 
                    success : false 
            } 
            case REVENUE_SUCCESS : return {
                   ...state ,
                     isLoading  : false  ,
                    data  :  action.payLoad , 
                    error : false , 
                    success : true
            }
            case REVENUE_FAILED : return {
                        ...state ,
                     isLoading  : false  ,
                    data  :  null , 
                    error : true , 
                    success : false 
            }
            default : return state

        }

     



}


export default revenueReducer ;