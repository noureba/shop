import React from "react";
import Layout from "../components/Layout";
import { Typography } from "@mui/material";

function PASP() {
  return (
    <Layout title="payment and shipping policy">
      <Typography variant="h4" color="text.primary" component="h1" sx={{my:"30px"}}>Payment Policy</Typography>
      <Typography color="text.primary">
        { `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad quis 
          natus veniam, fugiat quasi repellendus, dolore, laborum suscipit
          aperiam possimus doloremque esse minus quam modi pariatur nihil
          provident aut cum`.repeat(10)}
      </Typography>
      <Typography variant="h4" color="text.primary" component="h1" sx={{my:"30px"}}>Shipping Policy</Typography>
      <Typography color="text.primary">
        { `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad quis 
          natus veniam, fugiat quasi repellendus, dolore, laborum suscipit
          aperiam possimus doloremque esse minus quam modi pariatur nihil
          provident aut cum`.repeat(10)}
      </Typography>      
    </Layout>
  );
}

export default PASP;
