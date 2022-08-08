import React from "react";
import Layout from "../components/layout";
import { Typography } from "@mui/material";

function TAC() {
  return (
    <Layout title="Tearms and condition">
      <Typography variant="h4" color="text.primary" component="h1" sx={{my:"30px"}}>Tearms and condition</Typography>
      <Typography color="text.primary">
        {`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad quis 
          natus veniam, fugiat quasi repellendus, dolore, laborum suscipit
          aperiam possimus doloremque esse minus quam modi pariatur nihil
          provident aut cum`.repeat(20)}
      </Typography>
    </Layout>
  );
}

export default TAC;
