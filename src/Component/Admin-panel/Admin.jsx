
import {
  Collapse, Drawer, List, ListItem,
  ListItemIcon, ListItemButton,
  ListItemText, ListSubheader,
  AppBar, IconButton,
  Toolbar,
  Stack,
  Tooltip,
  Typography,
  Avatar ,
  FormGroup ,FormControlLabel ,Switch

} from "@mui/material";
import menuList from "../../json-api/menuNavList.json"
import logo from "../../../public/bislerylogo.png"
import { Link } from "react-router-dom";
import { useEffect, useState, } from "react";
import MediaQuery from "react-responsive";
import { styled } from '@mui/material/styles';
import { useSelector, useDispatch } from "react-redux";

const Admin = () => {
    
   const dispatch = useDispatch() ;
   const response = useSelector(res=>res);
   console.log(response)


  const [showDropdown, setShowDropdown] = useState(false);
  const [width, setWidth] = useState("85")
  const [showDrawer ,setShowDrawer]     = useState(false) ;
  const [showMode , setShowMode]        = useState("Light")



  useEffect(() => {
    width == 85 ? setShowDropdown(false) : null
  }, [width])



  const MenuListNav = ({ data }) => {
    return (
      <>
        <ListItem 
          sx={{ 
            py: 0 
          }}
        >
          <Tooltip title={data.label} placement="right">

            <ListItemButton
              LinkComponent={Link}
              to={data.isDropdown ? null : data.link}
              onClick={() => data.isDropdown ? (setShowDropdown(!showDropdown), setWidth(250)) : null}
            >
              <ListItemIcon>
                <span className="material-icons-outlined">{data.icon}</span>
              </ListItemIcon>

              <ListItemText primary={data.label} />

              {
                data.isDropdown ?
                  (<span className="material-icons-outlined">
                    {showDropdown ? "keyboard_arrow_up" : "keyboard_arrow_down"}
                  </span>)
                  :
                  null
              }

            </ListItemButton>

          </Tooltip>
        </ListItem>


        {data.isDropdown ? <DropdownMenu dMenu={data.dropdownMenu} /> : null}
      </>
    )
  }

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
          {
            dMenu.map((el, index) => {
              return <MenuListNav data={el} key={index} />

            })}
        </Collapse>
      </>
    )
  }


  const MenuListHeading = ({ data }) => {
    return (
      <>
        <List
          disablePadding 
          subheader={width >= 250 ?
            <ListSubheader 
            sx={{
               bgcolor : response.darkmode ? "#1a1919"  : "light",
               color   : response.darkmode ? "white" : "black"
            }}
            >{data.category}</ListSubheader>
            :
            null
          } 
          >

          {
            data.menus.map((el, index) => {
              return <MenuListNav data={el} key={index + Math.random()} />
            })
          }


        </List>
      </>
    )
  }

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
              transition: "0.3s",
              bgcolor: response.darkmode ? "black" : "white" ,
              overflowX : "hidden"
            },
            transition : "0.3s"
          }}
        >
          <List
            sx={{
              width: "100%",
              display: "flex",
              justifyItems: "center"
            }}
            subheader={<ListSubheader>
              <img src={logo}
                style={{
                  transition: "0.4s",
                  marginTop: "3px"
                }}
                width={width == 250 ? 100 : 65} />

              {width == 250 ?
                <Typography variant="" component="i">
                  Save Water
                </Typography>
                :
                null
              }

            </ListSubheader>}
          />

          {
            menuList.map((el, index) => {
              return <MenuListHeading data={el} key={index + Math.random()} />
            })

          }

        </Drawer>    </>
    )

  }

  const DrawerAtMobile = () => {

    return (
      <>
        <Drawer
          variant="temporary"
          open={showDrawer}
          onClose={()=>setShowDrawer(false)}
          sx={{
            width: width + "px",
            "& .MuiDrawer-paper": {
              width: width + "px",
              bgcolor: "#fff",
              transition: "0.3s",
              bgcolor:  response.darkmode ? "black" : "white"
            }
          }}
        >
          <List
            sx={{
              width: "100%",
              display: "flex",
              justifyItems: "center"
            }}
            subheader={<ListSubheader>
              <img src={logo}
                style={{
                  transition: "0.4s",
                  marginTop: "3px"
                }}
                width={width == 250 ? 100 : 65} />

              {width == 250 ?
                <Typography variant="" component="i">
                  Save Water
                </Typography>
                :
                null
              }

            </ListSubheader>}
          />

          {
            menuList.map((el, index) => {
              return <MenuListHeading data={el} key={index + Math.random()} />
            })

          }

        </Drawer>
      </>
    )

  }


  const controDrawerAtDesktop = () => {
    width == 85 ? setWidth(250) : setWidth(85)
  }

  const controlDrawerAtMobile = ()=>{
       showDrawer ? setShowDrawer(false) : (setShowDrawer(true) , setWidth(250)) ;
  }

  // Switch Btn 

  const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 8,
  '& .MuiSwitch-track': {
    borderRadius: 22 / 2,
    '&::before, &::after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 16,
      height: 16,
    },
    '&::before': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main),
      )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
      left: 12,
    },
    '&::after': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main),
      )}" d="M19,13H5V11H19V13Z" /></svg>')`,
      right: 12,
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: 'none',
    width: 16,
    height: 16,
    margin: 2,
  },
}));

const changeMode =(e)=>{

  let checkedMode = e.target.checked   ;

  checkedMode ?
     
    (
    setShowMode("Dark")  ,
     dispatch({
         type : "dark"
     }) 
    )

     : 

(
    setShowMode("Light") ,
    dispatch({
        type : "light"
    })
  
  )


}


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
            md: `calc(100% - (${width + "px"}))`,
            xs: "100%",

          },
          bgcolor: response.darkmode ? "#404040" : "#fff",
          transition: "0.4s"
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"

        >

          <Toolbar>

            <MediaQuery minWidth={900}>

              <Stack
                direction="row"
                alignItems="center"
                spacing={3}
              >

                <Tooltip title="menu" placement="bottom">
                  <IconButton
                    onClick={controDrawerAtDesktop}
                  >
                    <span className="material-icons-outlined">menu</span>
                  </IconButton>
                </Tooltip>


                <Tooltip title="email" placement="bottom">
                  <IconButton >
                    <span className="material-icons-outlined">email</span>
                  </IconButton>
                </Tooltip>


                <Tooltip title="web" placement="bottom">
                  <IconButton >
                    <span className="material-icons-outlined">web_asset</span>
                  </IconButton>
                </Tooltip>


                <Tooltip title="important" placement="bottom">
                  <IconButton >
                    <span className="material-icons-outlined">star</span>
                  </IconButton>
                </Tooltip>


              </Stack>
            </MediaQuery>

            <MediaQuery maxWidth={899}>
              <Tooltip title="menu" placement="bottom">
                <IconButton
                  onClick={controlDrawerAtMobile}
                >
                  <span className="material-icons-outlined">menu</span>
                </IconButton>
              </Tooltip>
            </MediaQuery>

          </Toolbar>

          <Toolbar>

            <Stack
              direction="row"
              alignItems="center"
            >
              <FormGroup>
                   <FormControlLabel control={<Switch onChange={changeMode} />} label={showMode} />
              </FormGroup>


              <Tooltip title="notification">
                <IconButton>
                  <span className="material-icons-outlined">notifications</span>
                </IconButton>
              </Tooltip>


              <Tooltip title="shopping">
                <IconButton>
                  <span className="material-icons-outlined">add_shopping_cart</span>
                </IconButton>
              </Tooltip>


              <Tooltip title="search">
                <IconButton>
                  <span className="material-icons-outlined">search</span>
                </IconButton>
              </Tooltip>

              <Tooltip title="profile-menu">
                <IconButton>
                  <Avatar src="profilephoto.png" />
                </IconButton>
              </Tooltip>

            </Stack>

          </Toolbar>

        </Stack>
      </AppBar>

    </>
  )

  return design;

}

export default Admin;