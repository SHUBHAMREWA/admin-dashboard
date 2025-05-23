
import '@fontsource/poppins';
import 'material-icons/iconfont/material-icons.css';
import { BrowserRouter as Router , 
        Routes , Route 
 } from "react-router-dom";
 


 import Admin from "./Component/Admin-panel/Admin";
import { createTheme , Paper, ThemeProvider } from '@mui/material';
 import { lightBlue } from '@mui/material/colors';
 import storage from './Storage';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import Signup from './Component/Signup/signup';
import Login from './Component/Login/Login';



const App =()=>{

       const [mode ,setMode] = useState("light")

       storage.subscribe(()=>{
                const applyDarkmode =  storage.getState().applyDarkMode;
                applyDarkmode.darkmode ? setMode("dark") : setMode("light")
       })

       useEffect(()=>{
            const applyDarkmode =  storage.getState().applyDarkMode;
                applyDarkmode.darkmode ? setMode("dark") : setMode("light")
       },[])


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
                     <Paper elevation={0}>
                            <Router>
                                   <Routes>
                                          <Route path="/" element={<Admin/>} />
                                          <Route path="/signup" element={<Signup/>}/>
                                          <Route path="/login" element={<Login/>}/>
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