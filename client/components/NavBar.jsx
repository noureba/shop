import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Link,
  Switch,
  IconButton,
  Badge,
  styled
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import MobileMenu from "./MobileMenu";
import {useDispatch, useSelector} from 'react-redux'
import {dark, light, openMobileMenu, closeMobileMenu} from './actions/index.js'
import Cookies from 'js-cookie'

const NavBarResponsive = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const NavBarResponsiveMobile = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));


function NavBar() {

  const mode = useSelector(state => state.mode)
  const mobileMenu = useSelector(state => state.mobileMenu)
  const cart = useSelector(state => state.cart)

  const dispatch = useDispatch()
  
  const modeChange = ()=>{
    if(!mode){
      dispatch(dark())
      Cookies.set('mode', true)
    } else{
      dispatch(light())
      Cookies.set("mode", false)
    }
  }
  const toggleMobileMenu = ()=>{
    if(!mobileMenu){
      dispatch(openMobileMenu())
    }else{
      dispatch(closeMobileMenu())
    }
  }

  return (
    <Box>
      <AppBar>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "80px",
            color:"white"
          }}
        >
          <NavBarResponsiveMobile >
            <IconButton onClick={toggleMobileMenu}>
              <MenuIcon fontSize="large" sx={{ color:"white" }} />
            </IconButton>
            <MobileMenu />
          </NavBarResponsiveMobile>
          <Typography href="/"variant="h4" underline="none" component="h1" sx={{color:"white", cursor:"pointer"}} >
            SHOP
          </Typography>
          <NavBarResponsive>
            <Link
              href="/"
              variant="h6"
              color="white"
              underline="hover"
              sx={{ mx: 2 }}
            >
              HOME
            </Link>
            <Link
              href="/shop"
              variant="h6"
              color="white"
              underline="hover"
              sx={{ mx: 2 }}
            >
              SHOP
            </Link>
            <Link
              href="/blogs"
              variant="h6"
              color="white"
              underline="hover"
              sx={{ mx: 2 }}
            >
              BLOG
            </Link>
            <Link
              href="/about"
              variant="h6"
              color="white"
              underline="hover"
              sx={{ mx: 2 }}
            >
              ABOUT
            </Link>
            <Link
              href="/contact"
              variant="h6"
              color="white"
              underline="hover"
              sx={{ mx: 2 }}
            >
              CONTACT
            </Link>
            <Switch sx={{ mx: 2 }} onChange={modeChange} />
          </NavBarResponsive>
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifiyContent: "center",
              }}
            >
              <Link>
                <NavBarResponsive>
                  <IconButton>
                    <SearchIcon
                      fontSize="large"
                      sx={{ mx: 2, color:"white" }}
                    />
                  </IconButton>
                </NavBarResponsive>
              </Link>
              <Link href="/login">
                <NavBarResponsive>
                  <IconButton>
                    <AccountCircleIcon
                      fontSize="large"
                      sx={{ mx: 2, color:"white"}}
                    />
                  </IconButton>
                </NavBarResponsive>
              </Link>
              <Link href="/cart">
                <IconButton aria-label="cart">
                  <Badge badgeContent={cart.length} showZero ={true} color="primary">
                    <ShoppingCartIcon
                      fontSize="large"
                      sx={{ margiRieght: 2, color:"white" }}
                    />
                  </Badge>
                </IconButton>
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
