import React from "react";
import { Box, Typography, Link, styled } from "@mui/material";

const FooterResponsive = styled("div",{})(
  ({theme})=>({
    [theme.breakpoints.down("md")]:{
      flexDirection:"column",
    }
  })
)

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#262626",
        color: "#fff",
        padding: "2rem 0",
        marginTop: "100px",
      }}
    >
      <FooterResponsive
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "flex-start",
          margin: "auto",
          maxWidth: "1200px",
        }}
      >
        <Box
          sx={{
            maxWidth: "400px",
            padding: "1rem",
          }}
        >
          <Typography variant="h3" sx={{ my: 2 }}>
            SHOP
          </Typography>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
            optio illum expedita accusantium consectetur placeat mollitia ipsam
            sed aperiam dolores vero, quae voluptatum totam eaque? Inventore
            maiores sint consectetur fugiat.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "1rem",
          }}
        >
          <Typography variant="h5">About</Typography>
          <Link
            href="/about"
            color="white"
            underline="hover"
            sx={{ my: 2 }}
          >
            About us
          </Link>
          <Link
            href="/contact"
            color="white"
            underline="hover"
            sx={{ my: 2 }}
          >
            Contact us
          </Link>
          <Link
            href="/blogs"
            color="white"
            underline="hover"
            sx={{ my: 2 }}
          >
            Blogs
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "1rem",
          }}
        >
          <Typography variant="h5">Policies</Typography>
          <Link
            href="/payment-and-shipping-policy"
            color="white"
            underline="hover"
            sx={{ my: 2 }}
          >
            payment and shipping policy
          </Link>
          <Link
            href="/refund-and-return-policy"
            color="white"
            underline="hover"
            sx={{ my: 2 }}
          >
            refund and return policy
          </Link>
          <Link
            href="/terms-and-condition"
            color="white"
            underline="hover"
            sx={{ my: 2 }}
          >
            terms and condition
          </Link>
        </Box>
        <Box
          sx={{
            padding: "1rem",
          }}
        >
          <Typography variant="h6">Subscribe to our news letter</Typography>
          <form action="" className="subscribeForm">
            <input type="email" placeholder="Enter your Email" required />
            <input type="submit" value="Subscribe" />
          </form>
        </Box>
      </FooterResponsive>
      <Typography sx={{textAlign:"center", my:"5px"}}>2022 By Noureddine Bachikh</Typography>
    </Box>
  );
}

export default Footer;
