##  Making Admin DashBoard Project ---  Using REACT.JS , Material UI , React-Routing , REST API,  AXIOS,  React-BootStrap , APEX , REDUX , SweetAlert ,


DAY -  1 
 -->>  creating React Project using npx create-vite@latest
 -->>  downloading Material UI  -- for styleling And Page LayOuting 
 -->> downLoaing React-router-dom   =  For Routing 
 -->>  create a Component Root file to Wrap All components => 
       admin-panel,
       Login ,
       SignUp,
       all Componet wrap in this Folder  

-->   today we Work on Admin Panels  , 
      Json Api (For navigation),
      in json  API  we are create Array OF object like [{}, {}]
      each Object have (Category , and Menus) catergory is ka List heading And Menus are a lists 
      Menus is array of object and they have three thing in each Object (Label , Icon ,Link) ;

-->   this Menu show In admin Panel and i use < Drawer >   component to make this List 
      create list using List componets like 
     (< List>  ,< ListItem> , < ListItemButton> , < ListItemIcon> , < ListItemText>)    

-->  For icons i use Meterial Icons with ClassNameuse
     "npm install material-icons@latest"  
    we import this in (App.js) file like this == "import material-icons/icon-font/material-css"
    

-->  Menu List have one DropDown menu i Created this Menu using < Collapse> component 



### DAY -   2

-->> Today we Create a App Bar section this section show in Top of the Admin-panel and this is a 
     (template file for admin-panel)
-->> using a Appbar Componet from Material Ui


### DAY  -  3 

-->  Making Admin Panel Responsive At mobile & Desktop , Using "react-responsive" library , 

--> Applying Dark Mode Enable and Disable Feacture using "REACT-REDUX" library for global State Manage  ,

--> creating Storage constant for createStore  and send this using Proviver Componenet and where we need to dispatch Action we 
   use (useDispatch) and for get state we using (useSelector)  function   

#### -->  here our admin-panels < navBar & App bar > (DARK MODE)  almost done We need to use Signup & ,Login feacture to access this Admin panel 
