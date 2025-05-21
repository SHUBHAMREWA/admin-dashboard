const  model = {
         darkmode : false
}

const applyDarkmode = ( state=model , action)=>{

           switch(action.type){
            case  "dark" : return {
                   ...state ,
                    darkmode : true
            }  

            case "light"  : return {
                    ...state ,
                     darkmode : false
            }
            default : return  state

           }

}

export default applyDarkmode ;