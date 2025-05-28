import { Grid  , Card , CardContent} from "@mui/material"; 
import Chart from "react-apexcharts";
import { useState, useEffect } from "react"; 
import { useSelector } from "react-redux";
import "../Sales/Sales.css"  ;

const Sales = ()=>{

    const applyDarkMode = useSelector(res=>res.applyDarkMode) 

    const [series ,setSeries]   = useState([{ 
         name : "Earning" ,
         data : [12,38,99,35,34,89,77,67,33]
    }])

    const [option , setOption]  =  useState({
        chart : {
            toolbar : {
                show : false
            },
            sparkline : {
                enabled : true
            },
            background: applyDarkMode.darkmode ? '#1a1919' : '#ffffff'
        },
        theme : {
            palette : "palette8"
        },
        title : {
            text : "180000$",
            style : {
                fontSize : "19px",
                color: applyDarkMode.darkmode ? '#ffffff' : '#000000'
            }
        },
        grid: {
            borderColor: applyDarkMode.darkmode ? '#404040' : '#e0e0e0'
        },
        stroke: {
            curve: 'smooth',
            width: 5
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.3,
                stops: [0, 90, 100]
            }
        },
        tooltip: {
            theme: applyDarkMode.darkmode ? 'dark' : 'light',
            style: {
                fontSize: '12px',
                fontFamily: 'Helvetica, Arial, sans-serif',
            },
            y: {
                formatter: function(value) {
                    return value + '$'
                }
            }
        }
    })

    // Update chart options when dark mode changes
    useEffect(() => {
        setOption(prevOptions => ({
            ...prevOptions,
            chart: {
                ...prevOptions.chart,
                background: applyDarkMode.darkmode ? '#1e1e1e' : '#ffffff'
            },
            title: {
                ...prevOptions.title,
                style: {
                    ...prevOptions.title.style,
                    color: applyDarkMode.darkmode ? '#ffffff' : '#000000'
                }
            },
            grid: {
                ...prevOptions.grid,
                borderColor: applyDarkMode.darkmode ? '#404040' : '#e0e0e0'
            },
            tooltip: {
                ...prevOptions.tooltip,
                theme: applyDarkMode.darkmode ? 'dark' : 'light'
            }
        }))
    }, [applyDarkMode.darkmode])

    return (
        <>   
        <Grid size={{xs: 12, md: 5}}>
            <Card
            className="card-box"
             sx={{m : 0 , p: 0}}>                   
                <CardContent>
                    <h3>sales</h3>
                    <Chart 
                        className  = "chart"
                        type="area"
                        height="160px"
                        series={series} 
                        options={option}
                    />
                </CardContent>
            </Card>
        </Grid>
        </>
    )
}

export default Sales;