import { Grid , Card , CardContent, Skeleton } from "@mui/material";
import { useEffect ,useState } from "react";
import Chart from "react-apexcharts"  ;
import { useSelector ,useDispatch } from "react-redux";
import revenueFunction from "./Revenue.action";




const Revenue  = ()=>{

     const dispatch = useDispatch() ;
    //  console
    const revenueReducer = useSelector(res=>res.revenueReducer) ; 
    const applyDarkMode  = useSelector(res=>res.applyDarkMode)  ; 



    const [series , setSeries]  = useState( 

        [
                {
                    name  : "Earning" ,
                    data : []
                }
                , 
                {
                    name : "Revenue" ,
                    data : []
                }
       ] 
)  ;

    const [option , setOption]   = useState({

     xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    labels: {
      style: {   
        colors : applyDarkMode.darkmode ? ['#fff'] : ['#222'],
        fontSize: '14px'
      }
    } 
  },
  yaxis: { 
    labels: {
      style: {
        colors: applyDarkMode.darkmode ? ['#fff'] : ['#222'],
        fontSize: '14px'
      }
    }
  },
    
   chart : { 
     toolbar : {
        tools   : {
             zoom : false ,
             zoomin : false , 
             zoomout : false ,
             pan : false , 
             reset : false 
        },
        background: applyDarkMode.darkmode ? '#1a1919' : '#fff',
     }
   },
   tooltip: {
     theme: applyDarkMode.darkmode ? 'dark' : 'light',
   }
   

       })
 

    const setData = ()=>{

        setSeries([
                    {
                    name: "Earning",
                    data: revenueReducer.data.earning,
                      },
                    {
                    name: "Revenue",
                    data: revenueReducer.data.expenses,
                    },
        ]);

    }

    useEffect(() => {
      setOption((oldData) => ({
        ...oldData,
        xaxis: {
          ...oldData.xaxis,
          labels: {
            ...oldData.xaxis.labels,
            style: {
              ...oldData.xaxis.labels.style,
              colors: applyDarkMode.darkmode ? Array(12).fill('#fff') : ['#222'],
            },
          },
        },
        yaxis: {
          ...oldData.yaxis,
          labels: {
            ...oldData.yaxis.labels,
            style: {
              ...oldData.yaxis.labels.style,
              colors: applyDarkMode.darkmode ? Array(12).fill('#fff') : ['#222'],
            },
          },
        },
        legend: {
          labels: {
            colors: applyDarkMode.darkmode ? '#fff' : '#222',
          },
        },
        chart: {
          ...oldData.chart,
          background: applyDarkMode.darkmode ? '#1a1919' : '#fff',
        },
        tooltip: {
          ...oldData.tooltip,
          theme: applyDarkMode.darkmode ? 'dark' : 'light',
        },
      }));
    }, [applyDarkMode.darkmode]);


    useEffect(()=>{
          
        if(revenueReducer.isLoading == null){               
              dispatch(revenueFunction())
        }

        if(revenueReducer.success){
                 setData();

        }

        if(revenueReducer.error){

        }


    } , [revenueReducer.success, revenueReducer.data , revenueReducer])



    return (

        <Grid size={{md : 6 , xs : 12 }}>

            <Card>

              {   
                revenueReducer && revenueReducer.isLoading 
                ?

                    <div
                    style={{
                     height : "320px"
                    }}
                    >

                      <div className="d-flex justify-content-end  p-2 ">
                        <Skeleton width={30} height={30} animation="pulse" variant="rectangular"/>
                        </div><br /><br />

                        <div className="d-flex justify-content-center  p-2 ">
                        <Skeleton width={"90%"} height={3} animation="wave" variant="text" />
                        </div>
                        <br /><br />
                        <div className="d-flex justify-content-center  p-2 ">
                        <Skeleton width={"90%"} height={3} animation="wave" variant="text" />
                        </div>
                        <br /><br />
                        <div className="d-flex justify-content-center  p-2 ">
                        <Skeleton width={"90%"} height={3} animation="wave" variant="text" />
                        </div>
                        <br /><br />
                    </div>


                 :
                <CardContent>

                      <Chart 
                      type = "line"
                      options={option}
                      series={series}
                      />

                </CardContent>  
                }

            </Card>




        </Grid>
     
    )



}

export default Revenue ;