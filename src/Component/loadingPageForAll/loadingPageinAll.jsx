
import { Skeleton ,Stack } from "@mui/material"

const LoadingAll = ()=>{

    return (
        <>
        <Stack padding={4} 
        mt={3}>

            <div 
            className="mb-5"> 
                <Skeleton 
                height={5}
                width="100%"
                variant="text"
                />
            </div>

            <div 
            className="mb-5"> 
                <Skeleton 
                height={33}
                width="100%"
                variant="text"
                />
            </div>
            
            <div 
            className="mb-5"> 
                <Skeleton 
                height={55}
                width="100%"
                variant="text"
                />
            </div>

            <div 
            className="mb-5"> 
                <Skeleton 
                height={95}
                width="100%"
                variant="text"
                />
            </div>

            <div 
            className="mb-5"> 
                <Skeleton 
                height={155}
                width="100%"
                variant="text"
                />
            </div>

            <div 
            className="mb-5"> 
                <Skeleton 
                height={70}
                width="100%"
                variant="text"
                />
            </div>

            
        </Stack>
        
        </>
    )
}


export default LoadingAll