import React from "react";
import Layout from "../components/Layout";
import { Typography } from "@mui/material";

function RARP() {
  return (
    <Layout title="Refund and return policy">
      <Typography variant="h4" color="text.primary" component="h1" sx={{ my: "30px" }}>
          Refund and return policy
      </Typography>
      <Typography color="text.primary">
        { `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad quis 
          natus veniam, fugiat quasi repellendus, dolore, laborum suscipit
          aperiam possimus doloremque esse minus quam modi pariatur nihil
          provident aut cum`.repeat(15)}
      </Typography>
    </Layout>
  );
}

export default RARP;
