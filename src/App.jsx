
import '@fontsource/poppins';
import 'material-icons/iconfont/material-icons.css';
import { BrowserRouter as Router , 
        Routes , Route 
 } from "react-router-dom";
 


 import Admin from "./Component/Admin-panel/Admin";
import { createTheme , Paper, ThemeProvider } from '@mui/material';
 import { lightBlue } from '@mui/material/colors';


const App =()=>{

     const theme =  createTheme({
                           palette : {
                              primary  : lightBlue ,
                                mode : "light"

                           }  ,
                           typography : {
                               fontFamily : "Poppins"
                           }  ,
                         

                      })


  const design = (
             
       <>
           <ThemeProvider theme={theme}>
              <Paper>
                     <Router>
                            <Routes>
                                   <Route path="/" element={<Admin/>} />
                            </Routes>
                     </Router>
                     </Paper>
           </ThemeProvider>  
       </>
  )

  return design ; 
    
   
}

export default App ;