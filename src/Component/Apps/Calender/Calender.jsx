
 import { Stack , Button , Card , CardContent  } from "@mui/material";
 import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid' ; 
import "./calender.css" ;
import { useRef } from "react";

const Calender = ()=>{

    const Calender = useRef() ;  




    return (
        <>

        <Card 
        sx={{
            p : 0 ,
            width :"80%" ,
            height : "100%" ,
            m : "auto"
        }}
         
        >



            <CardContent>
        <Stack 
        sx={{mt :5 , p : 4}}
        >

            <FullCalendar 
             plugins={[dayGridPlugin]}
             initialView="dayGridMonth" 
             ref={Calender}
             eventDisplay="list-item"
             headerToolbar={{
                start : "prev next today title" ,
                center  : "" ,
                end : ""
             }}
            />


        </Stack>
        </CardContent>

        </Card>
         
        </>
    )


}

export default Calender ;