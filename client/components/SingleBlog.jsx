import React from 'react'
import {Box, Typography} from '@mui/material'
import Image from 'next/image'

function SingleBlog(props) {
  return (
    <Box sx={{
      maxWidth:"1000px",
      margin: "80px auto 100px auto",
    }}>
      <Image src={props.blog.image} alt={props.blog.title} width="600" height="400" sx={{textAlign:"center", border:"10px solid red"}}/>
      <Typography variant="h4" sx={{my:"20px"}} color="text.primary">{props.blog.title}</Typography>
      <Typography sx={{my:"20px"}} color="text.primary">{props.blog.body}</Typography>
    </Box>
  )
}

export default SingleBlog