
import { Grid, Stack } from "@mui/material";

import Sales from "./Sales/Sales";
import Purchase from "./Purchase/Purchase";
import Totalcost from "./Totalcost/Totalcost";
import Revenue from "./Revenue/Revenue";
const Modern  = ()=>{
       
    return (
      
          <Grid 
          container
           height="auto"
           spacing={5}
           mt={3}
          >

           <Sales/>
           <Purchase/>
           <Totalcost/>
           <Revenue/>

         </Grid>
        
          
    )



}


export default Modern ;