
import '@fontsource/poppins';
import 'material-icons/iconfont/material-icons.css';
import { BrowserRouter as Router , 
        Routes , Route 
 } from "react-router-dom";
 


 import Admin from "./Component/Admin-panel/Admin";
import { createTheme , Paper, ThemeProvider } from '@mui/material';
 import { lightBlue } from '@mui/material/colors';
 import storage from './Storage';
import { useState } from 'react';
import { Provider } from 'react-redux';



const App =()=>{

       const [mode ,setMode] = useState("light")

       storage.subscribe(()=>{
                const applyDarkmode =  storage.getState();
                applyDarkmode.darkmode ? setMode("dark") : setMode("light")
       })


     const theme =  createTheme({
                           palette : {
                              primary  : lightBlue ,
                                mode :  mode

                           }  ,
                           typography : {
                               fontFamily : "Poppins"
                           }  ,
                         

                      })


  const design = (
             
       <>
        <Provider store={storage}> 

              <ThemeProvider theme={theme}>
                     <Paper>
                            <Router>
                                   <Routes>
                                          <Route path="/" element={<Admin/>} />
                                   </Routes>
                            </Router>
                            </Paper>
              </ThemeProvider>  

        </Provider>   
       </>
  )

  return design ; 
    
   
}

export default App ;