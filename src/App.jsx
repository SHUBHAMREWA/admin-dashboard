import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/poppins';
import 'material-icons/iconfont/material-icons.css';
import { BrowserRouter as Router , 
         Routes , Route } from "react-router-dom";
 


import Admin from "./Component/Admin-panel/Admin" ;
import { createTheme , Paper, ThemeProvider } from '@mui/material' ;
import { lightBlue ,teal } from '@mui/material/colors' ;
import storage from './Storage' ;
import { useEffect, useState } from 'react' ;
import { Provider } from 'react-redux' ; 
import Signup from './Component/Signup/signup' ;
import Login from './Component/Login/Login' ;
import AuthGuard from './Guard/AuthGuard' ;
import Modern from './Component/Admin-panel/Modern/Modern' ;
import Forgot from './Component/Forgot/Forgot' ;
import NotFound from './Component/Page-notfound/page_not_found';
import ResetPassword from './Component/Admin-panel/Reset_password/reset';
import Logout from './Component/Logoutpage/Logtout';
import Notes from "./Component/Apps/Notes/Note" ;
import Calender from './Component/Apps/Calender/Calender';

const App =()=>{

       const [mode ,setMode] = useState("light")

       storage.subscribe(()=>{
                const applyDarkmode =  storage.getState().applyDarkMode ;
                applyDarkmode.darkmode ? setMode("dark") : setMode("light")
       })


       useEffect(()=>{
            const applyDarkmode =  storage.getState().applyDarkMode ;
                applyDarkmode.darkmode ? setMode("dark") : setMode("light")
       },[])



     const theme =  createTheme({
                           palette : {
                              primary  : lightBlue ,
                               secondary : teal  ,
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
                                          <Route path="/" element={<Signup/>} />
                                          <Route path="/signup" element={<Signup/>}/>
                                             <Route element={<AuthGuard/>}>
                                                      <Route  path="/admin-panel" element={<Admin/>}>

                                                          <Route path="dashboard/modern"  element={<Modern/>}/>
                                                          <Route path="reset-password"  element={<ResetPassword/>}/>
                                                          <Route path="apps/notes"  element={<Notes/>}/>
                                                          <Route path="apps/calender" element={<Calender/>}/>
                                                          <Route path="logout"  element={<Logout/>}/>
                                                           <Route path="*"  element={<NotFound/>} />
                                                          
 
                                                      </Route>
                                            </Route>
                                          <Route path="/login" element={<Login/>}/>
                                          <Route path='/forgot' element={<Forgot/>}/>
                                          <Route path="*"  element={<NotFound/>} />
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