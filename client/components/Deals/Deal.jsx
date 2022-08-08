import React from "react";
import Countdown from "react-countdown";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";

function Deal() {
  return (
    <Box
      sx={{
        maxWidth:"1300px",
        margin: '100px auto',
        display: 'flex',
        flexDirecation: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}
    >
      <Box
        sx={{
          textAlign:"center"
        }}
      >
        <Typography variant="h3" sx={{margin:"10px"}} color="text.primary">Deal of The Day</Typography>
        <Typography variant="h4" sx={{margin:"10px"}} color="text.primary">Save 70%</Typography>
        <Typography variant="h4" sx={{margin:"10px"}} color="error">
          <Countdown date={Date.now() + 10000 * 6 * 60 * 24 * 3} />
        </Typography>
        <Button variant="contained" color="info" sx={{margin:"10px"}}>SHOP NOW</Button>
      </Box>
      <Box>
        <Image 
          src="https://res.cloudinary.com/dia3y316g/image/upload/v1656067483/shop/deals/deal_vo0ba9.jpg" 
          alt="deal of day"
          width="200"
          height="300"
        />
      </Box>
    </Box>
  );
}

export default Deal;
