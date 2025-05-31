
import { Grid  ,Stack  ,Button ,
     TextField ,FormControl , InputLabel ,
      OutlinedInput , IconButton , List, ListItem ,
      InputAdornment,ListItemButton ,
      ListSubheader,
      ListItemText,
      ListItemIcon ,
      Dialog , DialogTitle ,DialogContent ,Typography ,
      DialogActions
   } from "@mui/material"  ;
import JoditEditor from 'jodit-react' ;
import { useEffect, useState } from "react";
// import { setLocale } from "yup";


const Notes = ()=>{

    const [notes , setNotes]  = useState("") ;
    const [filename , setfilename]  = useState('') ; 
    const [savefile , setSavefile]  = useState(false) ;
    // const [heading ,setHeading]      =  useState("")
    const [first  , setFirst]      =   useState(0)
    const [ data  ,  setData]      =  useState([])
    const [showSavedFile , setShowSavedFile] = useState(false) ;
    const [selectedFile , setSelectedFile]   = useState(null) ;
    const [showingData , setShowingData]     = useState({
          heading : ''  ,
          data : ""
    }) 

    const getTextFromHTML = (html) => {
        const tempDiv = document.createElement("div");
          tempDiv.innerHTML = html;
          return tempDiv.textContent || tempDiv.innerText || "";
               };


    const dataEncoded = (data)=>{
             let plainText  =  getTextFromHTML(data.data) ;

             setShowingData({
                 heading : data.heading ,
                 data    : plainText
             })


    }
    


  const getallNote  = ()=>{ 
      //   console.log(localStorage.getItem("allNotes"))
        if(localStorage.getItem("allNotes")){
        setData(JSON.parse(localStorage.getItem("allNotes"))) ;
        setFirst(1)
        }
        else{
         setFirst(1)
        }

         }  

   const saveNote = ()=>{

    let objData = {}  

    objData.heading  = filename 
    objData.data     = notes
    
    console.log(objData)

    setData((oldData)=>{
            return [
                ...oldData ,
                   objData
            ]            
              })  

    return (
      setSavefile(!savefile) ,
      setNotes("") ,
      setfilename("") 
      
    )
   }

   useEffect(()=>{

    if(!first){
       getallNote() ;
    }   

     if(first){
    saveDataFun() ;
     }
     

   } , [data])


   const saveDataFun =()=>{
          localStorage.setItem("allNotes" , JSON.stringify(data)) ;
                      }

 
   const deleteFun = (index)=>{
    
      data.splice(index , 1) ;
       
   setData([
      ...data
   ])
      
   }                     


const ShowAllData = ({data})=>{


  return  ( 
                <>
                       <ListItem  sx={{m : 0  , p: 0}}>
                            <ListItemButton 
                         
                            >
                                 <ListItemText 
                                     onClick={()=>
                             { setShowSavedFile(!showSavedFile)  ,
                               dataEncoded(data)
                             }
                           }
                                  primary={data.heading}/>
                                 <ListItemIcon 
                                 onClick={()=>deleteFun(data.index)}
                                 >
                                    <span className="material-icons-outlined text-danger">delete</span>
                                 </ListItemIcon>
                            </ListItemButton>
                         </ListItem> 

                </>       
                         )
}                   
         

   const design = (
      
    <>

    
      <Dialog
            open={showSavedFile}
            onClose={()=>setShowSavedFile(!showSavedFile)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
         >
            <DialogTitle id="alert-dialog-title">
               { showingData.heading}
            </DialogTitle>
            <DialogContent dividers>
               <Typography id="alert-dialog-description">
                  { 
                    showingData.data
                  }
               </Typography>
            </DialogContent>
            <DialogActions>
               
               <Button onClick={()=>setShowSavedFile(!showSavedFile)} color="secondary" autoFocus>
                  Ok
               </Button>
            </DialogActions>
      </Dialog>


       
       <Grid 
       sx={{mt : 5}}
        container>

        <Grid
         sx={{p : 2}}
         size={{md: 3 , xs : 12 }}>

            <Stack 
            padding={4}
            spacing={2}>

                   <div 
                    className="d-flex justify-content-center gap-3 align-items-center"> 

                    <Button 
                    onClick={()=>setNotes("")}
                    variant="outlined" color="info" >New File</Button>

                    <Button
                    onClick={()=>setSavefile(!savefile)}
                    variant="outlined" color="warning">Save this File</Button>

                     </div>


                { 
                savefile ?
                        <FormControl                     
                        className="mt-3">
                          <InputLabel>File Name</InputLabel>
                          <OutlinedInput 
                          name="filename" 
                          label="filename"
                          variant="outlined"
                          value= {filename} 
                          onChange={(e)=>setfilename(e.target.value)}
                          endAdornment  = {
                            <InputAdornment>
                               <IconButton 
                               onClick={saveNote}
                               >
                                   <span className="material-icons-outlined">save</span>
                               </IconButton>
                            </InputAdornment>
                          }
                          >

                          </OutlinedInput>
                    </FormControl>
                     :
                     ""
                    }

                    <List 
                    subheader={<ListSubheader>
                        saved file
                    </ListSubheader>}
                    >


                        {
                           data && data.map((el, index)=>{
                                       el.index = index
                                return <ShowAllData data={el} key={index}/>
                           })

                        }
                         
                         
                    </List> 

                    
            </Stack>

        </Grid>

        <Grid 
        size={{xs : 12 , md : 9}}
        >
              
              <JoditEditor 
              config={{
                    height : "850px" ,
                      }}
              value={notes}
              onBlur={(newContent)=>setNotes(newContent)}
              /> 

        </Grid>


       </Grid>
      

    </>
   )


   return design ;

}


export default Notes ;