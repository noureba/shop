import React from "react";
import { Typography, Box, Link } from "@mui/material";

function LoginForm() {
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
        Login
      </Typography>
      <form
        action="http://localhost:3001/login"
        method="post"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
          gap: "10px",
        }}
      >
        <input
          type="email"
          placeholder="Email"
          name="email"
          style={inputStyle}
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          style={inputStyle}
          required
        />
        <Link href="#">Forget Password</Link>
        <input
          type="submit"
          value="Login"
          style={{
            width: "100px",
            padding: "10px",
            marginTop: "10px",
          }}
        />
      </form>
      <Link href="singup">create account</Link>
    </Box>
  );
}

export default LoginForm;
