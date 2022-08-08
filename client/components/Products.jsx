import React from "react";
import Link from "next/link";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Rating,
} from "@mui/material";

function Products(props) {
  return (
    <Box>
      <Typography variant="h4" align="center" sx={{ margin: "20px" }} color="text.primary">
        {props.title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {props.products.slice(props.start, props.end).map((product) => (
          <Link href={"/shop/" +  product.id} key={product.id} passHref>
            <Card
              sx={{
                width: "380px",
                margin: "10px",
                padding:'10px'
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image={product.image}
                  alt={product.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.title.slice(0, 25)}...
                  </Typography>
                  <Rating
                    name="half-rating-read"
                    defaultValue={product.rating.rate}
                    precision={0.5}
                    readOnly
                  />

                  <Typography variant="h6" sx={{ color: "green" }}>
                    {product.price}$
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        ))}
      </Box>
    </Box>
  );
}

export default Products;
