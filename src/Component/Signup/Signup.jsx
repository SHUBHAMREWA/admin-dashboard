
import { Grid, Button, Stack, TextField, Typography, 
        InputAdornment, IconButton, FormControl,
     FormControlLabel, Checkbox } from "@mui/material";
import signupImg from "../../../public/signupimg.png"

import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";




const Signup = () => {


    const response = useSelector(res => res)

    const signupDetails = {
        fullname: "shubham kushwaha",
        email: "shubham@gmail.com",
        password: "Shubham@123",
        mobile: "7898522932"
    }

    const errorDetails = {

        fullname : {
              error : false ,
              helperText : ""
        } 
          ,
         email : {
              error : false ,
              helperText : ""
        }
        ,
        password : {
              error : false ,
              helperText : ""
        }
        ,
        mobile : {
              error : false ,
              helperText : ""
        }
    }

    const [input, setInput] = useState(signupDetails)
    const [showPassword, setShowPassword] = useState("password") ; 
    const [error , setError]             =  useState(errorDetails) ;
    const [check , setCheck]              = useState(false)
                

    const checkInputsValue = (input)=>{
           let value = input.value ;
           if(value == ""){
               return({
                   error : true , 
                   helperText : "this field is required"
               })
           }
           else{
            return (
                {
                      error : false , 
                      helperText : ""
                }
            )
           }
    }

    const  nameCheck = (e)=>{
         let input = e.target  ;
         let prop  = input.name
         let isEmpty =  checkInputsValue(input) ;
         let syntax  =   checkNameSyntax(input) 
         
         return (
            
            setError((oldData)=>{
                   return {
                      ...oldData ,
                      [prop]  : isEmpty.error && isEmpty || syntax.error && syntax
                   }
            })

         )

 
  
    }

    const checkNameSyntax = (input)=>{
         const val  = input.value
         const nameRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/;  
         
         let check = nameRegex.test(val) && val.length  <= 25 ;

         if(check){
              return ({
                  error : false ,
                  helperText : ""
              })
         }
         else {
              return ({
                 error  :  true , 
                 helperText : "Names contain only Letter less than 25"
              })
         }

          
    }

    const mobileCheck =(e)=>{
          let input = e.target  ;
         let prop  = input.name
         let isEmpty =  checkInputsValue(input) ;
         let syntax  =   checkMobileSyntax(input) 
         
         return (
               setError((oldData)=>{
                   return {
                      ...oldData ,
                      [prop]  : isEmpty.error && isEmpty || syntax.error && syntax
                   }
            })
         )         
    }

    const checkMobileSyntax = (input)=>{ 
        let val = input.value
         let regex =    /^\d{4,15}$/;

         let check = regex.test(val)
         
         if(check){
                    return ({
                          error : false ,
                          helperText : ""
                    })
         }
         else{
                    return ({
                          error : true ,
                          helperText : "Maximum 15 digit allowed"
                    })
         }


    }

    const emailCheck = (e)=>{
          let input = e.target  ;
         let prop  = input.name
         let isEmpty =  checkInputsValue(input) ;
         let syntax  =   emailSyntax(input) 
         
         return (
               setError((oldData)=>{
                   return {
                      ...oldData ,
                      [prop]  : isEmpty.error && isEmpty || syntax.error && syntax
                   }
            })
         )         
    }

   const emailSyntax =(input)=>{

        let val = input.value
         let regex =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

         let check = regex.test(val)
         
         if(check){
                    return ({
                          error : false ,
                          helperText : ""
                    })
         }
         else{
                    return ({
                          error : true ,
                          helperText : "please Enter valid Email like abc@gmail.com"
                    })
         }
   }

   const passwordCheck =(e)=>{
       let input = e.target  ;
         let prop  = input.name
         let isEmpty =  checkInputsValue(input) ;
         let syntax  =   passwordSyntax(input) 
         
         return (
               setError((oldData)=>{
                   return {
                      ...oldData ,
                      [prop]  : isEmpty.error && isEmpty || syntax.error && syntax
                   }
            })
         )      
   }

   const passwordSyntax = (input)=>{
          let val = input.value
         let regex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
         let check = regex.test(val)
         
         if(check){
                    return ({
                          error : false ,
                          helperText : ""
                    })
         }
         else{
                    return ({
                          error : true ,
                          helperText : "Enter valid password like Abc@54 between 8 to 15 latter "
                    })
         }
   }

    const changeInputValue = (e) => {
        let input = e.target;
        let prop = input.name;
        let val = input.value;

        return (
            setInput((oldData) => {
                return {
                    ...oldData,
                    [prop]: val
                }
            })
        )

    }


    const validInputOnSubmit = ()=>{
           let valid  = true 
           for(let data in input){
                  
                if(input[data].length === 0){
                       valid = false 

                       setError((oldData)=>{
                           return {
                               ...oldData ,
                               [data]  : {
                                      error :  true ,
                                      helperText  : "this field is Required"
                               }
                           }
                       })

                }
                else {
                     
                }
           }
           return valid
    }


    const Register = (e) => {

        e.preventDefault()
         
        const valid = validInputOnSubmit() 

        console.log(valid)


    }




    const signupDesign = (
        <>

            <Grid
                sx={{
                    width: "100vw",
                    height: "100vh"
                }}
                container>

                <Grid size={{
                    md: 6,
                    xs: 12
                }}>

                    <Stack
                        sx={{
                            padding: 5,
                            paddingTop: 0
                        }}
                    >
                        <img src={signupImg} alt="" width="100%" />
                    </Stack>

                </Grid>


                <Grid size={{ md: 6, xs: 12 }}
                    sx={{
                        width: "100%",
                        height: "fit-content",
                        mt: { xs: 1, md: 5 },
                        padding: { xs: 4, md: 5 },
                        paddingBottom: { xs: 3, md: 5 },
                        bgcolor: response.darkmode ? "black" : "white"

                    }}  >

                    <Stack
                    >

                        <Typography variant="h4" fontWeight="bold" component={"p"}
                        >
                            Register
                        </Typography>

                        <form onSubmit={Register}
                            style={{
                                width: "100%",
                                height: 'fit-content'
                            }}
                        >

                            <Stack
                                marginTop={{ xs: 4, md: 4 }}
                                spacing={5}
                                sx={{
                                    width: "100%",
                                    height: 'fit-content'
                                }}
                            >

                                <TextField
                                    label="FullName"
                                    name="fullname"
                                    value={input.fullname}
                                    error={error.fullname.error}
                                    helperText= {error.fullname.helperText}
                                    onChange={changeInputValue}
                                    onInput = {nameCheck}
                                    onBlur = {nameCheck}
                                />

                                <TextField
                                    label="Mobile"
                                    name="mobile"
                                    type="number"
                                    value={input.mobile}
                                    error={error.mobile.error}
                                    onChange={changeInputValue}
                                    helperText= {error.mobile.helperText}
                                    onInput={mobileCheck}
                                    onBlur={mobileCheck}
                                />


                                <TextField
                                    label="Email"
                                    name="email"
                                    value={input.email}
                                    error={error.email.error}
                                    onChange={changeInputValue}
                                    helperText= {error.email.helperText}
                                    onInput={emailCheck}
                                    onBlur={emailCheck}
                                />

                                <TextField
                                    label="Password"
                                    name="password"
                                    type={showPassword}
                                    value={input.password}
                                    onChange={changeInputValue}
                                    error={error.password.error}
                                    helperText= {error.password.helperText}
                                    onInput={passwordCheck}
                                    onBlur={passwordCheck}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={() => showPassword == "password" ? setShowPassword("text") : setShowPassword("password")}
                                                >
                                                    <span className="material-icons">{showPassword == "password" ? "visibility" : "visibility_off"}</span>
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                />

                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    >

                                    <FormControlLabel control={<Checkbox
                                    onClick={()=>setCheck(!check)}
                                    checked = {check}
                                      size="large" />}
                                        label="I accept Terms and Conditions !"
                                    />

                                    <Button 
                                    LinkComponent={Link}
                                    to= "/login"                                  
                                    variant="outlined">Already Have An Account</Button>

                                </Stack>

                                <Button 
                                disabled ={!check}
                                variant="contained" color="secondary"
                                type="submit"> Register</Button>

                             </Stack>


                        </form>



                    </Stack>


                </Grid>



            </Grid>

        </>
    )

    return signupDesign
}

export default Signup;