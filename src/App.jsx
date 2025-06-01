import * as React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/poppins';
import 'material-icons/iconfont/material-icons.css';
import {
       BrowserRouter as Router,
       Routes, Route
} from "react-router-dom";



import Admin from "./Component/Admin-panel/Admin";
import { createTheme, Paper, ThemeProvider } from '@mui/material';
import { lightBlue, teal } from '@mui/material/colors';
import storage from './Storage';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';

import LoadingAll from "./Component/loadingPageForAll/loadingPageinAll";

const Signup = React.lazy(() => import("./Component/Signup/Signup"));
// import Signup from './Component/Signup/signup' ; 

const Login = React.lazy(() => import("./Component/Login/Login"));
// import Login from './Component/Login/Login' ;

const AuthGuard = React.lazy(() => import("./Guard/AuthGuard"))
// import AuthGuard from './Guard/AuthGuard' ;

const Modern = React.lazy(() => import("./Component/Admin-panel/Modern/Modern"))
// import Modern from './Component/Admin-panel/Modern/Modern' ;

const Forgot = React.lazy(() => import("./Component/Forgot/Forgot"))
// import Forgot from './Component/Forgot/Forgot' ;

const NotFound = React.lazy(() => import("./Component/Page-notfound/page_not_found"))
// import NotFound from './Component/Page-notfound/page_not_found';

const ResetPassword = React.lazy(() => import('./Component/Admin-panel/Reset_password/reset'))
// import ResetPassword from  './Component/Admin-panel/Reset_password/reset';

const Logout = React.lazy(() => import('./Component/Logoutpage/Logtout'))
// import Logout from './Component/Logoutpage/Logtout';

const Notes = React.lazy(() => import("./Component/Apps/Notes/Note"))
// import Notes from "./Component/Apps/Notes/Note" ;

const Calender = React.lazy(() => import('./Component/Apps/Calender/Calender'))
// import Calender from './Component/Apps/Calender/Calender';


const App = () => {


       const [mode, setMode] = useState("light")

       storage.subscribe(() => {
              const applyDarkmode = storage.getState().applyDarkMode;
              applyDarkmode.darkmode ? setMode("dark") : setMode("light")
       })

       useEffect(() => {

              const applyDarkmode = storage.getState().applyDarkMode;
              applyDarkmode.darkmode ? setMode("dark") : setMode("light") ;

              const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches; 

              console.log(prefersDarkMode)
           if(prefersDarkMode){
              console.log("state is changed")
             storage.dispatch({
              type : "dark"
             })
           }
           else{
                storage.dispatch({
                     type : "light"
                })
           }
       }, [])

        



       const theme = createTheme({
              palette: {
                     primary: lightBlue,
                     secondary: teal,
                     mode: mode

              },
              typography: {
                     fontFamily: "Poppins"
              },
       })


       const design = (

              <>
                     <Provider store={storage}>

                            <ThemeProvider theme={theme}>
                                   <Paper elevation={0}>
                                          <Router>
                                                 <Routes>
                                                        <Route path="/" element={<React.Suspense fallback={<LoadingAll />} >
                                                               <Signup />
                                                        </React.Suspense>} />
                                                        <Route path="/signup" element={<React.Suspense fallback={<LoadingAll />} >
                                                               <Signup />
                                                        </React.Suspense>} />
                                                        <Route element={<React.Suspense fallback={<LoadingAll />} >
                                                               <AuthGuard />
                                                        </React.Suspense>}>
                                                               <Route path="/admin-panel" element={<React.Suspense fallback={<LoadingAll />} >
                                                                      <Admin />
                                                               </React.Suspense>}>

                                                                      <Route path="dashboard/modern" element={<React.Suspense fallback={<LoadingAll />} >
                                                                             <Modern />
                                                                      </React.Suspense>} />
                                                                      <Route path="reset-password" element={<React.Suspense fallback={<LoadingAll />} >
                                                                             <ResetPassword />
                                                                      </React.Suspense>} />
                                                                      <Route path="apps/notes" element={<React.Suspense fallback={<LoadingAll />} >
                                                                             <Notes />
                                                                      </React.Suspense>} />
                                                                      <Route path="apps/calender" element={<React.Suspense fallback={<LoadingAll />} >
                                                                             <Calender />
                                                                      </React.Suspense>} />
                                                                      <Route path="logout" element={<React.Suspense fallback={<LoadingAll />} >
                                                                             <Logout />
                                                                      </React.Suspense>} />
                                                                      <Route path="*" element={<React.Suspense fallback={<LoadingAll />} >
                                                                             <NotFound />
                                                                      </React.Suspense>} />


                                                               </Route>
                                                        </Route>
                                                        <Route path="/login" element={<React.Suspense fallback={<LoadingAll />} >
                                                               <Login />
                                                        </React.Suspense>} />
                                                        <Route path='/forgot' element={<React.Suspense fallback={<LoadingAll />} >
                                                               <Forgot /></React.Suspense>} />
                                                        <Route path="*" element={<React.Suspense fallback={<LoadingAll />} ><NotFound /></React.Suspense>} />
                                                 </Routes>
                                          </Router>
                                   </Paper>
                            </ThemeProvider>

                     </Provider>
              </>
       )

       return design;


}

export default App;