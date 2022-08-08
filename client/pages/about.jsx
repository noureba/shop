import React from "react";
import Layout from "../components/Layout";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

function About() {
  return (
    <Layout title="About">
      <Typography variant="h3" sx={{ textAlign: "center", py:"20px" }} color="text.primary">
          About
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection : "row",
          flexWrap : "wrap",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "50px 20px"
        }}
      >
        <Image
          src="https://res.cloudinary.com/dia3y316g/image/upload/v1655988903/shop/slider/2_fqwqgz.jpg"
          alt="about us"
          width="500"
          height="500"
        />
        <Typography sx={{maxWidth:'500px', my:"20px"}} color="text.primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            pariatur repudiandae repellendus deleniti culpa eius sint ad
            molestiae aliquid nostrum! Corporis minima distinctio recusandae
            quas saepe enim repudiandae ullam quo. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Numquam debitis laboriosam laudantium
            minus ex iusto dolor dolore ipsam, quisquam sed accusantium at
            perspiciatis. Quibusdam numquam totam labore expedita ad. Labore.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab odit
            dicta aliquid quo beatae illum ipsum culpa exercitationem mollitia
            voluptatem reprehenderit, necessitatibus iusto distinctio numquam,
            tempora repellendus sapiente nam nisi.
        </Typography>
      </Box>
    </Layout>
  );
}

export default About;
