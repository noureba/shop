import React from "react";
import Layout from "../components/Layout";
import SingupForm from "../components/SingupForm";
import { Box } from "@mui/material";
import Image from "next/image";

function Singup() {
  return (
    <Layout title="Sing up">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <Image
          src="https://res.cloudinary.com/dia3y316g/image/upload/v1656354435/shop/deals/6343825_wuurnv.jpg"
          alt="login"
          width="500"
          height="500"
        />
        <SingupForm />
      </Box>
    </Layout>
  );
}

export default Singup;
