import React from 'react'
import {Box} from '@mui/material'

function Info(props) {
  return (
    <Box sx={{
      width:"300px"
    }}>
      <form action="" className="contactForm">
        <label htmlFor="FullName">Full Name</label>
        <input type="text" id="FullName" value={props.user.fullName} disabled />
        <label htmlFor="Email">Email</label>
        <input type="email" id="Email" value={props.user.email} disabled/>
        <label htmlFor="OldPassword">Old Password</label>
        <input type="password" id="OldPassword" required/>
        <label htmlFor="NewPassword">New Password</label>
        <input type="password" id="NewPassword" required/>
        <input type="submit" value="Change Password" />
      </form>
    </Box>
  )
}

export default Info