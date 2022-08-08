import React from "react";
import { Box, Typography, Rating, Button } from "@mui/material";
import Image from "next/image";
import {useSelector, useDispatch} from 'react-redux'
import {addToCart} from './actions/index'


function SingleProduct(props) {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const [quantity, seQuantity] = React.useState(1)
  const count = (e)=>{
    seQuantity(e.target.value)
  }

  const AddToCart = async ()=>{
    dispatch(addToCart(props.product, quantity))
  }
  console.log(cart)


  return (
    <Box
      sx={{
        maxWidth: "1300px",
        margin: "80px auto 100px auto",
        padding: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <Box>
          <Image
            src={props.product.image}
            alet={props.product.title}
            width="500"
            height="500"
          />
        </Box>
        <Box sx={{
          maxWidth: "500px"
        }}>
          <Typography variant="h4"  component="h1" sx={{ my: "10px" }} color="text.primary">
            {props.product.title}
          </Typography>
          <Rating
            name="half-rating-read"
            defaultValue={props.product.rating.rate}
            precision={0.5}
            readOnly
          />
          <Typography
            variant="h6"
            component="p"
            sx={{ my: "10px", color: "green" }}
          >
            {props.product.price}$
          </Typography>
          <Typography variant="h6" component="p" sx={{ my: "10px" }} color="text.primary">
          category: {props.product.category}
          </Typography>
          <input type="number" onChange={count} style={{maxWidth:"50px", height:"38px", fontSize:"16px"}} />
          <Button variant="contained" color="info" onClick={AddToCart}>Add to cart</Button>
        </Box>
      </Box>
      <Box>
        <Typography
          variant="h5"
          component="h2"
          color="info"
          sx={{ my: "20px" }}
        >
          Description
        </Typography>
        <Typography color="text.primary">{props.product.description}</Typography>
      </Box>
    </Box>
  );
}

export default SingleProduct;
