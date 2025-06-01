import {
  Collapse,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  ListSubheader,
  AppBar,
  IconButton,
  Toolbar,
  Stack,
  Tooltip,
  Typography,
  Avatar,
  FormGroup,
  FormControlLabel,
  Switch,
  Menu,
  MenuItem,
  Breadcrumbs,
} from "@mui/material";
import menuList from "../../json-api/menuNavList.json";
import logo from "../../../public/bislerylogo.png";
import { Link, Outlet, useNavigate, useResolvedPath ,  useMatch , useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import MediaQuery from "react-responsive";
import { styled } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import { LogoutFunction } from "../Login/login.action";
import profileImg from "../../../public/profilephoto.png" ;

const Admin = () => {

  const currentPath  =  useLocation() ;
  const pathSplit    =  currentPath.pathname.split("/")


useEffect(()=>{

const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches; 
prefersDarkMode ? setCheck(true) : setCheck(false)

}, [])


  const dispatch = useDispatch();
  const applyDarkMode = useSelector((res) => res.applyDarkMode);
  const loginReducer = useSelector((res) => res.loginReducer);

  
  const navigate = useNavigate();

  const [showDropdown, setShowDropdown] = useState(false) ;
  const [width, setWidth] = useState("85") ;
  const [showDrawer, setShowDrawer] = useState(false) ;
  const [showMode, setShowMode ] = useState("Light") ;
  const [check ,setCheck]        = useState(false) ;
  const [menuParent, setMenuParent] = useState(null) ;
  const menuState = Boolean(menuParent);
  const [usersDetails, setUserDetails] = useState({
                                                  email: "",
                                                  mobile: "",
                                                  name: "",
                                                  userId: "",
                                                }) ;



  const checkLogOut = () => {
    if (loginReducer.logout) {
      navigate("/login");
    }

    if (loginReducer.loutoutfailed) {
      window.confirm("logout Failed check your Internet");
    }
  };


  const getUserDetails = () => {
    let user = sessionStorage.getItem("userDetails");

    if (user) {
      user = JSON.parse(user);
      setUserDetails(user);
    }
  };


  useEffect(() => {
    checkLogOut();
    getUserDetails();
  }, [loginReducer]);

  useEffect(() => {
    width == 85 ? setShowDropdown(false) : null;
  }, [width]);

  useEffect(() => {
    if (applyDarkMode.darkmode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [applyDarkMode.darkmode]);



  const MenuListNav = ({ data }) => {

              const resolve  =  useResolvedPath(data.link) ;
                    
              const activelink = useMatch({
                                path : resolve.pathname ,
                                end : true 
              })


              
    return (
      <>
        <ListItem
          sx={{
            py: 0,
          }}
        >
          <Tooltip title={data.label} placement="right">
            <ListItemButton 
              sx={{
                  bgcolor : data.link && activelink ? "#ff5722" : "" ,
                  "&:hover" : {
                       bgcolor : data.link && activelink ? "red" : "" ,
                  }
              }}
              LinkComponent={Link}
              to={data.isDropdown ? null : data.link}
              onClick={() =>
                data.isDropdown
                  ? (setShowDropdown(!showDropdown), setWidth(250))
                  : null
              }
            >
              <ListItemIcon>
                <span className="material-icons-outlined">{data.icon}</span>
              </ListItemIcon>

              <ListItemText primary={data.label} />

              {data.isDropdown ? (
                <span className="material-icons-outlined">
                  {showDropdown ? "keyboard_arrow_up" : "keyboard_arrow_down"}
                </span>
              ) : null}
            </ListItemButton>
          </Tooltip>
        </ListItem>

        {data.isDropdown ? <DropdownMenu dMenu={data.dropdownMenu} /> : null}
      </>
    );
  };

  const DropdownMenu = ({ dMenu }) => {
    return (
      <>
        <Collapse
          in={showDropdown}
          sx={{
            transition: "0.4s",
            pl: 6,
          }}
        >
          {dMenu.map((el, index) => {
            return <MenuListNav data={el} key={index} />;
          })}
        </Collapse>
      </>
    );
  };

  const MenuListHeading = ({ data }) => {
    return (
      <>
        <List
          disablePadding
          subheader={
            width >= 250 ? (
              <ListSubheader
                sx={{
                  bgcolor: applyDarkMode.darkmode ? "#1a1919" : "light",
                  color: applyDarkMode.darkmode ? "white" : "black",
                }}
              >
                {data.category}
              </ListSubheader>
            ) : null
          }
        >
          {data.menus.map((el, index) => {
            return <MenuListNav data={el} key={index + Math.random()} />;
          })}
        </List>
      </>
    );
  };

  const DrawerAtDesktop = () => {
    return (
      <>
        <Drawer
          variant="persistent"
          open={true}
          sx={{
            width: width + "px",
            "& .MuiDrawer-paper": {
              width: width + "px",
              bgcolor: "#fff",
              transition: "width 0.3s ease-in-out",
              bgcolor: applyDarkMode.darkmode ? "#121212" : "white",
              overflowX: "hidden",
            },
            transition: "width 0.3s ease-in-out",
          }}
        >
          <List
            sx={{
              width: "100%",
              display: "flex",
              justifyItems: "center",
              bgcolor : loginReducer.darkmode ? "#0000007b"  : ""
            }}
            subheader={
              <ListSubheader sx={{
                display : "flex"  ,
                justifyContent : "space-between" ,
                      bgcolor : loginReducer.darkmode ? "black"  : ""
                
              }}
              >
                <img
                  src={logo}
                  style={{
                    transition: "0.4s",
                    marginTop: "3px",
                    backgroundColor : "inherit"
                  }}
                  width={width == 250 ? 100 : 65}
                />

                {width == 250 ? (
                  <Typography variant="" component="i">
                    Save Water
                  </Typography>
                ) : null}
              </ListSubheader>
            }
          />

          {menuList.map((el, index) => {
            return <MenuListHeading data={el} key={index + Math.random()} />;
          })}
        </Drawer>{" "}
      </>
    );
  };

  const DrawerAtMobile = () => {
    return (
      <>
        <Drawer
          variant="temporary"
          open={showDrawer}
          onClose={() => setShowDrawer(false)}
          sx={{
            width: width + "px",
            "& .MuiDrawer-paper": {
              width: width + "px",
              bgcolor: "#fff",
              transition: "0.3s",
              bgcolor: applyDarkMode.darkmode ? "black" : "white",
            },
          }}
        >
          <List
            sx={{
              width: "100%",
              display: "flex",
              justifyItems: "center",
            }}
            subheader={
              <ListSubheader 
              sx={{
                 display  : "flex" ,
                  bgcolor : applyDarkMode.darkmode ? "#0000007b"  : ""
              }}
              >
                <img
                  src={logo}
                  style={{
                    transition: "0.4s",
                    marginTop: "3px",
                  }}
                  width={width == 250 ? 100 : 65}
                />

                {width == 250 ? (
                  <Typography variant="" component="i">
                    Save Water
                  </Typography>
                ) : null}
              </ListSubheader>
            }
          />

          {menuList.map((el, index) => {
            return <MenuListHeading data={el} key={index + Math.random()} />;
          })}
        </Drawer>
      </>
    );
  };

  const controDrawerAtDesktop = () => {
    width == 85 ? setWidth(250) : setWidth(85);
  };

  const controlDrawerAtMobile = () => {
    showDrawer ? setShowDrawer(false) : (setShowDrawer(true), setWidth(250));
  };

  // Switch Btn

  const Android12Switch = styled(Switch)(({ theme }) => ({
    padding: 8,
    "& .MuiSwitch-track": {
      borderRadius: 22 / 2,
      "&::before, &::after": {
        content: '""',
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        width: 16,
        height: 16,
      },
      "&::before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main)
        )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
        left: 12,
      },
      "&::after": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main)
        )}" d="M19,13H5V11H19V13Z" /></svg>')`,
        right: 12,
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "none",
      width: 16,
      height: 16,
      margin: 2,
    },
  }));

  const changeMode = (e) => {
    let checkedMode = e.target.checked;

    checkedMode
      ? (setShowMode("Dark"),
        dispatch({
          type: "dark",
        }) ,
        setCheck(true)

      )
      : (setShowMode("Light"),
        dispatch({
          type: "light",
        }) ,
        setCheck(false)
       );
  };

  // Main Admin DESIGN

  const design = (
    <>
      <MediaQuery minWidth={900}>
        <DrawerAtDesktop />
      </MediaQuery>

      <MediaQuery maxWidth={899}>
        <DrawerAtMobile />
      </MediaQuery>

      <AppBar
        elevation={1}
        position="fixed"
        sx={{
          width: {
            md: `calc(100% - ${width}px)`,
            xs: "100%",
          },
          bgcolor: applyDarkMode.darkmode ? "#404040" : "#fff",
          transition: "width 0.3s ease-in-out",
          ml: { md: `${width}px`, xs: 0 },
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Toolbar>
            <MediaQuery minWidth={900}>
              <Stack direction="row" alignItems="center" spacing={3}>
                <Tooltip title="menu" placement="bottom">
                  <IconButton onClick={controDrawerAtDesktop}>
                    <span className="material-icons-outlined">menu</span>
                  </IconButton>
                </Tooltip>

                <Tooltip title="email" placement="bottom">
                  <IconButton>
                    <span className="material-icons-outlined">email</span>
                  </IconButton>
                </Tooltip>

                <Tooltip title="web" placement="bottom">
                  <IconButton>
                    <span className="material-icons-outlined">web_asset</span>
                  </IconButton>
                </Tooltip>

                <Tooltip title="important" placement="bottom">
                  <IconButton>
                    <span className="material-icons-outlined">star</span>
                  </IconButton>
                </Tooltip>
              </Stack>
            </MediaQuery>

            <MediaQuery maxWidth={899}>
              <Tooltip title="menu" placement="bottom">
                <IconButton onClick={controlDrawerAtMobile}>
                  <span className="material-icons-outlined">menu</span>
                </IconButton>
              </Tooltip>
            </MediaQuery>
          </Toolbar>

          <Toolbar>

            <Stack direction="row" alignItems="center">
              <FormGroup>
                <FormControlLabel
                  control={<Switch onChange={changeMode} checked={check}  />}
                  label={showMode}
                />
              </FormGroup>

              <Tooltip title="notification">
                <IconButton>
                  <span className="material-icons-outlined">notifications</span>
                </IconButton>
              </Tooltip>

              <Tooltip title="shopping">
                <IconButton>
                  <span className="material-icons-outlined">
                    add_shopping_cart
                  </span>
                </IconButton>
              </Tooltip>

              <Tooltip title="search">
                <IconButton>
                  <span className="material-icons-outlined">search</span>
                </IconButton>
              </Tooltip>

              <Tooltip title="profile-menu">
                <IconButton onClick={(e) => setMenuParent(e.target)}>
                  <Avatar src={profileImg} />
                </IconButton>
              </Tooltip>

              <Menu
                anchorEl={menuParent}
                id=""
                open={menuState}
                onClick={() => setMenuParent(null)}
                onClose={() => setMenuParent(null)}
                slotProps={{
                  paper: {
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      bgcolor: applyDarkMode.darkmode ? "#282828" : "",
                      "&::before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                        bgcolor: applyDarkMode.darkmode ? "#282828" : "",
                      },
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem sx={{ m: 0, p: 0 }}>
                  <ListItemButton>
                    <ListItemIcon>
                      <span
                        style={{ marginRight: "12px" }}
                        className="material-icons-outlined "
                      >
                        home
                      </span>
                      Home
                    </ListItemIcon>
                  </ListItemButton>
                </MenuItem>

                <MenuItem sx={{ m: 0, p: 0 }}>
                  <ListItemButton>
                    <ListItemIcon>
                      <span
                        style={{ marginRight: "12px" }}
                        className="material-icons-outlined"
                      >
                        person
                      </span>
                      {usersDetails.name}
                    </ListItemIcon>
                  </ListItemButton>
                </MenuItem>

                <MenuItem sx={{ m: 0, p: 0 }}>
                  <ListItemButton>
                    <ListItemIcon>
                      <span
                        style={{ marginRight: "12px" }}
                        className="material-icons-outlined"
                      >
                        phone
                      </span>
                      {usersDetails.mobile}
                    </ListItemIcon>
                  </ListItemButton>
                </MenuItem>

                <MenuItem sx={{ m: 0, p: 0 }}>
                  <ListItemButton>
                    <ListItemIcon>
                      <span
                        style={{ marginRight: "12px" }}
                        className="material-icons-outlined"
                      >
                        email
                      </span>
                      {usersDetails.email}
                    </ListItemIcon>
                  </ListItemButton>
                </MenuItem>

                <MenuItem sx={{ m: 0, p: 0 }}>
                  <ListItemButton>
                    <ListItemIcon>
                      <span
                        style={{ marginRight: "12px" }}
                        className="material-icons-outlined"
                      >
                        settings
                      </span>
                      Settings
                    </ListItemIcon>
                  </ListItemButton>
                </MenuItem>

                <MenuItem sx={{ m: 0, p: 0 }}>
                  <ListItemButton
                    onClick={() =>
                      dispatch(LogoutFunction(usersDetails.userId))
                    }
                  >
                    <ListItemIcon>
                      <span
                        style={{ marginRight: "12px" }}
                        className="material-icons-outlined"
                      >
                        logout
                      </span>
                      Logout
                    </ListItemIcon>
                  </ListItemButton>
                </MenuItem>
              </Menu>
            </Stack>

          </Toolbar>
        </Stack>
      </AppBar>

      {/* Navigation Apps */} 

      <Stack  
      sx={{
            ml : { md :  `${width}px` ,  xs: "0px"} ,
            mt : 4 ,
            p : 3 , 
            transition : "0.4s" ,
            minHeight : "100vh" ,
            bgColor : loginReducer.darkmode ? "#0000007b" : "white"
      }}
      >  
         
         <Breadcrumbs 
         sx={{mt : 3}}
         > 
               { 
                pathSplit.map((el, index)=>{

                      if(el != ""  && el != "admin-panel"){

                        return <Link key={index}> {el} </Link>
                              
                        }
               }) 

               }
            </Breadcrumbs>

               
               <Outlet/>

      </Stack>


    </>
  );

  return design;
};

export default Admin;
