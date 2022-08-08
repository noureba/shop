import React from "react";
import Head from "next/head";
import NavBar from "./NavBar";
import { ThemeProvider, createTheme, Box } from "@mui/material";
import Footer from "./Footer";
import Search from "./Search";
import { useSelector } from "react-redux";


function Layout(props) {
  const mode = useSelector((state) => state.mode);

  const theme = createTheme({
    palette: {
      mode: mode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="description" content={props.description} />
        <title>Shop-{props.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Box sx={{ bgcolor: "background.paper" }}>
        <Box
          sx={{
            maxWidth: "1300px",
            margin: "80px auto",
          }}
        >
          <Search />
          <NavBar />
          {props.children}
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default Layout;
