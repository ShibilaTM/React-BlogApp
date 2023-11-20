import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='secondary'>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BlogApp
          </Typography>
          <Button color="inherit" ><Link style={{color:'white', textDecoration:'none'}} to={'/add'}>Add Post</Link></Button>
          <Button color="inherit" ><Link style={{color:'white', textDecoration:'none'}} to={'/view'}>View All Post</Link></Button>
          <Button color="inherit"><Link style={{color:'white', textDecoration:'none'}} to={'/profile'}>My Profile</Link></Button>
          <Button color="inherit"><Link style={{color:'white', textDecoration:'none'}} to={'/'}>Logout</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
