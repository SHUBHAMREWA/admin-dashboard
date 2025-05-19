
import { Collapse, Drawer  , List , ListItem ,
         ListItemIcon, ListItemButton ,
         ListItemText, ListSubheader , 


        } from "@mui/material";
import menuList from "../../json-api/menuNavList.json"
 import logo from "../../../public/bislerylogo.png"
import { Link } from "react-router-dom";
import { useState } from "react";

const Admin =()=>{


    const [showDropdown ,setShowDropdown] =  useState(true);


    const MenuListNav = ({data})=>{
              return (
                <>
                <ListItem 
                sx={{py: 0}}
                >
                   
                      <ListItemButton 
                       LinkComponent={Link} 
                       to= { data.isDropdown ? null : data.link }
                       onClick={()=> data.isDropdown ? setShowDropdown(!showDropdown)  : null }
                      >
                              <ListItemIcon>
                                  <span className="material-icons-outlined">{data.icon}</span>
                              </ListItemIcon>     

                               <ListItemText primary={data.label} />  

                               { 
                                data.isDropdown ?
                                 (<span className="material-icons-outlined">
                                    {showDropdown ? "keyboard_arrow_up"  : "keyboard_arrow_down"}
                                 </span>) 
                                : 
                                null
                                     }

                      </ListItemButton>                     
                </ListItem>
                
                      
                        {  data.isDropdown ? <DropdownMenu  dMenu = {data.dropdownMenu} /> : null}
                </>
              )
    }

    const   DropdownMenu = ({dMenu})=>{
           
         return (
             <>
              
         <Collapse
          in={showDropdown }
          sx={{
            transition: "0.4s",
            pl: 6,
          }}
        >
          { 
              dMenu.map((el , index) => {
            return <MenuListNav data={el} key={index} /> 
            
          })}
        </Collapse>
             </>
         )
    }

 
    const MenuListHeading = ({data})=>{
            return (
                  <>
                  <List 
                   disablePadding
                   subheader={<ListSubheader>{data.category}</ListSubheader>}>
                     
                    {
                           data.menus.map((el, index)=>{
                                 return <MenuListNav data={el} key={index+Math.random()} />
                           })
                    }


                  </List>
                  </>
            )
    }

      
    const design = (

        <>
                <Drawer 
                   variant="persistent"
                   open = {true}
                 >  
                     <List 
                     subheader={<ListSubheader>
                       <img src={logo} alt="" />
                     </ListSubheader>}
                     />
                  
                  {
                        menuList.map((el,index)=>{
                              return <MenuListHeading data = {el} key={index+Math.random()} />
                        })
                        
                  }

                </Drawer>  

 
        </>
    )

    return design ;

}

export default Admin ;