import React from "react";
import { Typography, Box, Link } from "@mui/material";

function SingupForm() {

  const inputStyle = {
    padding: "10px",
    fontSize: "18px",
  };
  return (
    <Box>
      <Typography
        variant="h4"
        component="h1"
        sx={{ textAlign: "center", my: "30px" }}
        color="text.primary"
      >
        Sing up
      </Typography>
      <form
        method="POST"
        action="http://localhost:3001/singup"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
          gap: "10px",
        }}
      >
        <input
          type="text"
          placeholder="Full Name"
          name="fullName"
          style={inputStyle}
          // onChange={handelWidthChange}
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          style={inputStyle}
          // onChange={handelWidthChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          style={inputStyle}
          // onChange={handelWidthChange}
          required
        />
        <input
          // onClick={handelSubmit}
          type="submit"
          value="submit"
          style={{
            width: "100px",
            padding: "10px",
            marginTop: "10px",
          }}
        />
      </form>
      <Link href="singup" >Login</Link>
    </Box>
  );
}

export default SingupForm;
