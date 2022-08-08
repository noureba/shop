import React from 'react'
import Layout from '../components/Layout'
import {Box} from '@mui/material'
import LoginForm from '../components/LoginForm'
import Image from 'next/image'

function login() {
  return (
    <Layout title="Login">
      <Box sx={{
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"space-around",
        alignItems:"center",
        padding:"20px"
      }}>
        <Image 
          src="https://res.cloudinary.com/dia3y316g/image/upload/v1656354435/shop/deals/6343825_wuurnv.jpg"
          alt="login"
          width="500"
          height="500"
        />
        <LoginForm/>
      </Box>
    </Layout>
  )
}

export default login