import React from "react";
import Layout from "../components/Layout";
import { Box, Typography } from "@mui/material";
import Form from "../components/Form";
import Info from "../components/Info";

function Contact() {
  return (
    <Layout title="Contact">

      <Typography variant="h3" sx={{textAlign:"center", py:"20px"}} color="text.primary">Contact</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirecation: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          gap:"20px",
          padding:"20px"
        }}
      >
        <Form />
        <Info />
      </Box>
    </Layout>
  );
}

export default Contact;
