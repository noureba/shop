import React from "react";
import {
  Box,
  Link,
  CardActions,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import NextLink from "next/link";


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
        {props.blogs.slice(props.start, props.end).map((blog) => (
          <NextLink href={"/blogs/" + blog.id} key={blog.id} passHref>
            <Card
              sx={{
                width: "380px",
                margin: "10px",
                padding:"10px"
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image={blog.image}
                  alt={blog.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {blog.title.slice(0,20)}...
                  </Typography>
                  <Typography variant="p" color="success">
                    {blog.body.slice(0, 50)}...
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link sx={{cursor:"pointer"}}>Read More</Link>
              </CardActions>
            </Card>
          </NextLink>
        ))}
      </Box>
    </Box>
  );
}

export default Products;
