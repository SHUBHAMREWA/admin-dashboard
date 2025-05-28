##  Making Admin DashBoard Project ---  Using REACT.JS , Material UI , React-Routing , REST API,  AXIOS,  React-BootStrap , APEX Chart, REDUX , SweetAlert  , YUP,  universal-Cookie  , react-useAsync  ,


### DAY -  1 
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



### DAY  -  4 

--> Create a Singup form page and add Path for this in Rotes  

--> Using (custom Form Validation ) we can also use another library to validate this like ( YUP library ) 

--> here i'm usinga ka < Grid > layOut Utility and also make this Page Responsive 


##### "Now, we will get the HTTP request to sign up user details information tomorrow ."



### DAY - 5

--> Today we completed the Sign Up or Registration Process, and we used the (AXIOS) library for HTTP requests.

--> Here, I used (react-bootstrap-sweetalert) for alert messages.

--> When the user is already signed up, we show an alert message. Also, after a successful sign-up, we notify them.

--> Used the REDUX library for global state management.

--> Used (combineReducers({})) to wrap all reducers inside (createStore()).

--> Received reducers using destructuring inside the useSelector(res => res) function.

--> We used some libraries for REDUX state monitoring and dispatching actions — like (Logger, Thunk).

--> For AXIOS requests, we created a base URL.

--> After successful registration or sign-up, we received a (TOKEN). This token helps in accessing the Admin Panel. 


### DAY  - 6  

--> Today we are creating a Login Page

--> Here I use (Yup) library for form validation

--> In this we also do an Axios or HTTP request to get token (this token helps us to login or access admin panel)

--> I used React-Redux for global state handling and for setting information we use a cookie

--> Universal Cookie is best library for saving information in cookie

--> Save Infomation of User When click On remember me .

#####  Next day we will be creating a Guard Component and this will become a security component of our Admin Panel 


### DAY  -  7

--> Today i create a AuthGuard Component for safely Access the Admin panel 

--> using axios request to verify the Token 

--> using  < Outlet> componet for show Child Route 

--> Afeter verifaction we get in response a user Details this user We will use in Admin Panel 


#### Next day we will be work on Admin panel Again and we try to create a Dashboard  Componet  


### DAY   -  8

--> Today work on Menu component. This Menu component shows after clicking on the Profile Icon.

--> In this Menu I used userDetails which are fetched after token verification and this is shown on the Profile Menu.

--> Here we worked on (Logout) using REDUX state management and this is done using Axios request.

--> Both Login and Logout are using Axios request:
      - Login method - POST
      - Logout method - GET


--> also we using ka useResolve and useMatch Component to when any route match we are highlight them 


### DAY   -  9  

-→ Creating a Modern Dashboard Panel and used ApexCharts library to show information.

-→ Also used Redux for API data fetching.

-→ Applying Dark Mode and some CSS for animations.