
 import { Stack , Button } from "@mui/material";
 import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid'

const Calender = ()=>{

    return (
        <>

        <Stack 
        sx={{mt :5 , p : 4}}
        >

            <FullCalendar 
             plugins={[dayGridPlugin]}
             initialView="dayGridMonth"
            />


        </Stack>
         
        </>
    )


}

export default Calender ;