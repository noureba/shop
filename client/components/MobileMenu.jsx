import React from "react";
import { Box, Link, Switch, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector, useDispatch } from "react-redux";
import {dark, light, openMobileMenu, closeMobileMenu} from './actions/index.js'

function MobileMenu() {

  const mode = useSelector(state => state.mode)
  const mobileMenu = useSelector(state => state.mobileMenu)
  const dispatch = useDispatch()
  
  const modeChange = ()=>{
    if(!mode){
      dispatch(dark())
    } else{
      dispatch(light())
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
    <Box sx={{
    }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          height: "100%",
          width: "70%",
          backgroundColor: "blue",
          top: 0,
          transition:"0.3s left, 1s width",
          left: mobileMenu ? "0%" : "-70%",
        }}
      >
        <IconButton sx={{width:"50px" }} onClick={toggleMobileMenu}>
          <CloseIcon fontSize="large" sx={{ color:"white", textAlign:"center"}} />
        </IconButton>
        <Box sx={{
          py:2, 
          display: "flex",
          flexDirection: "column",}}>
          <Link
            href="/"
            variant="h6"
            color="white"
            underline="hover"
            sx={{ p: 2 }}
          >
          HOME
          </Link>
          <Link
            href="/shop"
            variant="h6"
            color="white"
            underline="hover"
            sx={{ p: 2 }}
          >
          SHOP
          </Link>
          <Link
            href="/blog"
            variant="h6"
            color="white"
            underline="hover"
            sx={{ p: 2 }}
          >
          BLOG
          </Link>
          <Link
            href="/about"
            variant="h6"
            color="white"
            underline="hover"
            sx={{ p: 2 }}
          >
          ABOUT
          </Link>
          <Link
            href="/contact"
            variant="h6"
            color="white"
            underline="hover"
            sx={{ p: 2 }}
          >
          CONTACT
          </Link>
          <Switch sx={{ mx: 2 }} onChange={modeChange}/>

        </Box>
       
      </Box>
      <Box sx={{
        display: mobileMenu ? "block": "none",
        position: "fixed",
        height: "100%",
        width: "30%",
        top: 0,
        left: "70%",
        zIndex:"999"
      }}
      onClick={toggleMobileMenu}
      >
      </Box >
    </Box>
  );
}

export default MobileMenu;
