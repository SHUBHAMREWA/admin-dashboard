
import {
    Grid, Button, TextField,
    Box, Stack, FormControlLabel,
    InputAdornment,
    Checkbox, Typography,
    IconButton
} from "@mui/material";
import { Link ,useNavigate } from "react-router-dom";
import { useState ,useEffect } from "react";
import * as yup from "yup"
import { useSelector , useDispatch } from "react-redux";
import{ loginFunction }from "./login.action.js";
import Cookies from "universal-cookie"  ;



const Login = () => {

     const dispatch = useDispatch() ;
     const loginReducer = useSelector(res=>res.loginReducer) ;


    const [input, setInput] = useState({
                                            username : "",
                                            password: ""
                                        });

    const [hidePassword, setHidePassword] = useState("password");

    const [error, setError] = useState({
        username: {
            error: false,
            helpertext: ""
        },
        password: {
            error: false,
            helpertext: ""
        }
    });

    const [userInfoSave, setuserInfoSave] = useState(false);
    const [disableLogin , setDisableLogin]  = useState(true) ;
    const navigate                         = useNavigate()  ;
    const cookie      = new Cookies()




 const checkForLogin = ()=>{   

     if(loginReducer.success){               
        cookie.set("authToken" , loginReducer.data.token , {maxAge: 86400})  ;    
        navigate("/admin-panel/dashboard/modern")   
     }  

     if(loginReducer.usernotfound){

            return setError((oldData)=>{
                    return {
                         ...oldData , 
                            username : {
                                 error  :true , 
                                 helpertext : "user not Found"
                            }
                    }
            })

     }

     if(loginReducer.incorrectpassword){
           
         return   setError((oldData)=>{
                      return {
                         ...oldData ,
                         password  : {
                              error  : true ,
                              helpertext : "Incorrect Password"
                         }
                      }
         })
     }


  }


  const rememberForLogin = () =>{
            let user = localStorage.getItem("userInfo") ;
             if(user){

                user  =  JSON.parse(user)
               return  (
                   setInput(user) ,
                   setDisableLogin(false)
                )
             }
  }

    

 useEffect(()=>{ 

    checkForLogin()  ;
    rememberForLogin()
       
     
 } , [loginReducer])



    const inputControl = (e) => {
        let input = e.target;
        let val = input.value;
        let prop = input.name
        return setInput((oldData) => {
            return {
                ...oldData,
                [prop]: val
            }
        })
    }

    const schema = yup.object().shape({
        username: yup.string().required().email(),
        password: yup.string().min(8).max(15)
    })


    const checkInput = async (e) => {

        let key = e.target.name;

        try {
            await schema.validateAt(key, input)

            setError((oldData) => {
                return {
                    ...oldData,
                    [key]: {
                        error: false,
                        helperText: ""
                    }
                }
            })


        }
        catch (error) {
            return setError((oldData) => {
                return {
                    ...oldData,
                    [key]: {
                        error: true,
                        helpertext: error.errors[0]
                    }
                }
            })

        }


    }

    const checkAllInputOnKeydown= async()=>{
        let valid  =  await schema.isValid(input)  ;
            return setDisableLogin(!valid)
    }

    const login = (e) => {
        e.preventDefault();

      userInfoSave ? localStorage.setItem("userInfo" , JSON.stringify(input))
       : !userInfoSave  &&  localStorage.removeItem("userInfo") ;
            
        dispatch(loginFunction(input))

    }


    return (
        <>
            <Grid

                sx={{
                    paddingX: { md: 12, xs: 5 },
                    height: "100vh",
                    margin: 0,

                }}
                container>

                <Grid size={{ xs: 12, md: 6 }}>

                    <Box padding={5}
                        textAlign="center"
                    >
                        <img src="LoginImg.png" width="100%" height="100%" />
                    </Box>

                </Grid>


                <Grid size={{ xs: 12, md: 6 }}>

                    <form onSubmit={login}>

                        <Stack
                            padding={{ md: 3, xs: 0 }}
                            spacing={4}
                            marginTop={{ md: 4, xs: 0 }}
                        >
                            <Typography variant="h4" component="p">
                                Login

                            </Typography>


                            <TextField
                                error={error.username.error}
                                helperText={error.username.helpertext}
                                label="Email"
                                name="username"
                                type="email"
                                value={input.username}
                                onChange={inputControl}
                                onInput={checkInput}
                                onKeyDown={checkAllInputOnKeydown}

                            />

                            <TextField
                                error={error.password.error}
                                helperText={error.password.helpertext}
                                label="Password"
                                name="password"
                                type={hidePassword}
                                value={input.password}
                                onChange={inputControl}
                                onInput={checkInput}
                                onKeyDown={checkAllInputOnKeydown}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment>
                                            <IconButton
                                                onClick={() => hidePassword == "password" ? setHidePassword("text") : setHidePassword("password")}
                                            > <span className="material-icons">{hidePassword == "password" ? "visibility" : "visibility_off"}</span></IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />

                            <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <FormControlLabel
                                  control={<Checkbox
                                        onClick={() => setuserInfoSave(!userInfoSave)}
                                        size="large" />}
                                        label="Remember Me !"
                                />

                                <div>
                                    <Button 
                                    loading = {loginReducer.isLoading}
                                    disabled = {disableLogin}
                                    variant="contained" color="secondary" type="submit">
                                        Login
                                    </Button>
                                </div>

                            </Stack>


                            <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Button LinkComponent={Link}
                                    to="/signup"
                                    variant="outlined">Create New Account</Button>
                                <Button 
                                LinkComponent={Link} 
                                to ="/forgot"
                                 variant="outlined" color="warning">Forgot Password</Button>
                            </Stack>

                        </Stack>

                    </form>


                </Grid>


            </Grid>

        </>
    )



}

export default Login;