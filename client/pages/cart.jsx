import React from "react";
import Layout from "../components/Layout";
import {
  Box,
  TableContainer,
  Button,
  TableHead,
  TableRow,
  Table,
  TableCell,
  TableBody,
  Paper,
  Typography,
  Link,
} from "@mui/material";
import Image from "next/image";
import { useSelector } from "react-redux";

function Cart() {
  const cart = useSelector((state) => state.cart);

  return (
    <Layout title="Cart">
      {cart.length == 0 ? (
        <Box sx={{
          textAlign:"center",
          margin:"200px 0"
        }}>
          <Typography variant="h2" >Cart is Empty</Typography>
          <Link href="/shop">Go To Shop</Link>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "20px",
            padding: "20px",
          }}
        >
          <Typography>Crat is Empty</Typography>
          <TableContainer component={Paper} sx={{ maxWidth: 700 }}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>id</TableCell>
                  <TableCell align="start">image</TableCell>
                  <TableCell align="start">Product Name</TableCell>
                  <TableCell align="start">count</TableCell>
                  <TableCell align="start">price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.map((item) => (
                  <TableRow
                    key={item.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {item.id}
                    </TableCell>
                    <TableCell align="start">
                      <Image src={item.image} width="50" height="50" />
                    </TableCell>
                    <TableCell align="start">{item.title}</TableCell>
                    <TableCell align="start">
                      <input
                        value={item.count}
                        type="number"
                        min="1"
                        max="99"
                      />
                    </TableCell>
                    <TableCell align="start">{item.price}$</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box>
            <TableContainer component={Paper} sx={{ width: 300 }}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right">price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      items
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {}$
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="start">Tax</TableCell>
                    <TableCell align="start">{}$</TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="start">Shipping</TableCell>
                    <TableCell align="start">{}$</TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="start">Total</TableCell>
                    <TableCell align="start">{}$</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Link href="/chekout">
              <Button variant="contained" color="info" sx={{ my: "10px" }}>
                Chekout
              </Button>
            </Link>
          </Box>
        </Box>
      )}
    </Layout>
  );
}

export default Cart;
