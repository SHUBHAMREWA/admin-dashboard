
import { Grid  ,Stack , Button , TextField  } from "@mui/material";
import forgotimg from "../../../public/forgot.png" ;
import { useSelector , useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { forgotRequest , updateRequest } from "./forgot.action";
import { useNavigate } from "react-router-dom";


const Forgot =()=>{

    const navigate = useNavigate()

    const dispatch  =  useDispatch() ;
    const forgotReducer = useSelector(res=>res.forgotReducer)  ;
    console.log(forgotReducer)


    const [input ,setInput]    = useState({
        code : "" ,
        password : ""  , 
        email : ""
    })

    const [error ,setError]   = useState({

           email : {
                 error  : false ,
                 helpertext : ""
           }  ,

           code : { 
                error : false ,
                helpertext : ""                
           }

    })


    useEffect(()=>{

        if(forgotReducer.requstfail){
            setError((oldData)=>{
                return {
                      ...oldData  ,
                         email  : {
                               error : true ,
                               helpertext : "user  Not found"
                         }
                }

            })

        }

        if(forgotReducer.error){
              setError((oldData)=>{
                    return {
                        ...oldData , 
                        code : {
                               error : true ,
                               helpertext : "Wrong code try again"
                        }
                    }
              })
        }

        if(forgotReducer.updated){
               let getresponse = window.confirm("password Changed Try to Login ") ;
               if(getresponse){
                    navigate("/login")
               }
               else {
                   navigate("/signup")
               }
        }


    } , [forgotReducer])




    const otpRequest= (e)=>{
           e.preventDefault() ;
         dispatch(forgotRequest(input.email)) ;       
    }


    const changePasswordFun = (e)=>{
          e.preventDefault() ;
           dispatch(updateRequest(input))
    }

    const changeInput = (e)=>{
        let inp = e.target ; 
        let val = inp.value  ;
        let key = inp.name
         
        setInput((oldData)=>{
              return {
                ...oldData ,
                [key]  : val
              }
        })
        
    }




    const design = (
        <>
         
         <Grid 
         height= "100vh" 
         container>

            <Grid size={{md: 6 , xs : 12}}>
                <img  src={forgotimg} alt="" height="90%" width="100%"/>
            </Grid>

            <Grid size={{md: 6 , xs : 12}}>
                  

                      { 
                           !forgotReducer.requestsend  

                           ?

                          <form onSubmit={otpRequest} >

                                    <Stack spacing={1}
                                    sx={{
                                        p : 4 ,
                                        mt : { md: 7 , xs : 1}
                                    }}
                                    >

                                    <TextField 
                                    label= "Username" 
                                    type="email"
                                    value = {input.email}
                                    name = "email"
                                    error = {error.email.error}
                                    helperText = {error.email.helpertext}
                                    onChange={changeInput}

                                    />
                                    <div>
                                    <Button 
                                    loading={forgotReducer.isLoading}
                                    variant="contained" 
                                    color = "error"
                                     type="submit">
                                        Forgot
                                    </Button>
                                    </div>

                                    </Stack>

                            </form>
                    
                            :
                            <form onSubmit={changePasswordFun} >

                                    <Stack spacing={1}
                                    sx={{
                                        p : 4 ,
                                        mt : { md: 7 , xs : 1}
                                    }}
                                    >

                                    <TextField 
                                    label= "Code" 
                                    type="number"
                                    value  = {input.code}
                                    name= "code"
                                    error={error.code.error} 
                                    helperText = {error.code.helpertext}
                                    onChange={changeInput}

                                    />

                                    <TextField 
                                    label="new  password"
                                    type="password" 
                                    value = {input.password}
                                    name  = "password"
                                    onChange={changeInput}
                                    />


                                    <div>
                                    <Button 
                                    loading = {forgotReducer.isLoading}
                                    variant="contained" 
                                    color = "secondary"
                                     type="submit">
                                        Submit
                                    </Button>
                                    </div>

                                    </Stack>
                            </form>
                  }
                



            </Grid>

         </Grid>
        </>
    )

    return design ;


}

export default Forgot ;