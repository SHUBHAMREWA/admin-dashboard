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
