import React from "react";
import {
  Box,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableHead,
  Paper,
  TableBody,
  Typography,
  Button,
} from "@mui/material";
import Image from "next/image";

function History(props) {
  return (
    <Box>
      {props.history.length >= 1 ? (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Order id</TableCell>
                <TableCell align="start">product</TableCell>
                <TableCell align="start">title</TableCell>
                <TableCell align="start">Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.history.map((order) => (
                <TableRow
                  key={order.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{order.id}</TableCell>
                  <TableCell align="start">
                    <Image
                      src={order.image}
                      alt={order.title}
                      width="50"
                      height="50"
                    />
                  </TableCell>
                  <TableCell align="start">{order.title}</TableCell>
                  <TableCell align="start">{order.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Box
          sx={{
            textAlign: "center",
            padding:"20px"
          }}
        >
          <Typography variant="h4" sx={{my:"20px"}}>you dont have any order yet</Typography>
          <Button variant="contained" color="info" href="/shop">
            Shop Now
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default History;
