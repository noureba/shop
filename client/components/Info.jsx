import React from 'react'
import {Box, Typography} from '@mui/material'
import MapIcon from '@mui/icons-material/Map';
import CallIcon  from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

function Info() {
  return (
    <Box sx={{
      flexGrow:"1",
      color:"text.primary"
    }}>
      <Box sx={{
        display:"flex",
        flexDirection:"row",
        gap:"10px 10px",
        margin:"20px 0",
      }}>
        <MapIcon fontSize='large' />
        <Typography>Lorem ipsum dolor sit, tetur</Typography>
      </Box>
      <Box sx={{
        display:"flex",
        flexDirection:"row",
        gap:"10px 10px",
        margin:"20px 0"
      }}>
        <CallIcon fontSize='large'/>
        <Typography>+212680435078</Typography>
      </Box>
      <Box sx={{
        display:"flex",
        flexDirection:"row",
        gap:"10px 10px",
        margin:"20px 0"
      }}>
        <EmailIcon fontSize='large'/>
        <Typography>contact@mail.com</Typography>
      </Box>
    </Box>
  )
}

export default Info