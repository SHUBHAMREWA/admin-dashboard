 import 'material-icons/iconfont/material-icons.css';
import { BrowserRouter as Router , 
        Routes , Route 
 } from "react-router-dom";
 


 import Admin from "./Component/Admin-panel/Admin";

 


const App =()=>{

  const design = (
             
             <Router>
                    <Routes>
                         <Route path="/" element={<Admin/>} />
                    </Routes>
             </Router>

  )

  return design ; 
    
   
}

export default App ;