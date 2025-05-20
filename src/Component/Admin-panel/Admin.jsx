
import {
  Collapse, Drawer, List, ListItem,
  ListItemIcon, ListItemButton,
  ListItemText, ListSubheader,
  AppBar, IconButton,
  Toolbar,
  Stack,
  Tooltip,
  Typography,
  Avatar

} from "@mui/material";
import menuList from "../../json-api/menuNavList.json"
import logo from "../../../public/bislerylogo.png"
import { Link } from "react-router-dom";
import { useEffect, useState , } from "react";
import MediaQuery from "react-responsive";


const Admin = () => {


  const [showDropdown, setShowDropdown] = useState(false);
  const [width, setWidth] = useState("85")



  useEffect(() => {
    width == 85 ? setShowDropdown(false) : null
  }, [width])


  const MenuListNav = ({ data }) => {
    return (
      <>
        <ListItem
          sx={{ py: 0 }}
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
            <ListSubheader>{data.category}</ListSubheader>
            :
            null
          }>

          {
            data.menus.map((el, index) => {
              return <MenuListNav data={el} key={index + Math.random()} />
            })
          }


        </List>
      </>
    )
  }

  const controDrawer = () => {
    width == 85 ? setWidth(250) : setWidth(85)
  }

  const design = (

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
            bgcolor: "white"
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

      <AppBar
        elevation={1}
        position="fixed"
        sx={{
          width: {
            md: `calc(100% - (${width + "px"}))`,
            xs: "100%",

          },
          bgcolor: "#fff",
          transition: "0.4s"
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"

        >

          <Toolbar>

            <Stack
              direction="row"
              alignItems="center"
              spacing={3}
            >

              <Tooltip title="menu" placement="bottom">
                <IconButton
                  onClick={controDrawer}
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

          </Toolbar>

          <Toolbar>

            <Stack
            direction="row"
            alignItems="center"
            >
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
                                  <Avatar src="profilephoto.png"/>
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