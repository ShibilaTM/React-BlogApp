import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
  const [user,setUser]=useState();
  const navigate= useNavigate();
  const inputHandler=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }
  const addHandler=(e)=>{
    console.log(user)
    navigate('/');
  }

  return (
    <div style={{margin:'12%'}}>
        <h1 style={{color:'purple'}}>Sign-Up</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
        <TextField variant='outlined' fullWidth label='Name' name='Name' onChange={inputHandler}/>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
        <TextField variant='outlined' fullWidth label='Email' name='Email' onChange={inputHandler}/>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
        <TextField variant='outlined' fullWidth label='Address' name='Address' onChange={inputHandler} multiline rows={3}/>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
        <TextField variant='outlined' fullWidth label='Phone Number' name='Phone Number' onChange={inputHandler}/>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
        <TextField variant='outlined' fullWidth label='Password' type='password' name='Password' onChange={inputHandler}/>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
        <Button variant='contained' color='secondary' onClick={addHandler}>Submit</Button>
        </Grid>
        <br /><br /><br />
        <Grid item xs={12} sm={12} md={12}>
        <Typography>
            <Link to={'/'}>Back To Login</Link>
        </Typography>
        </Grid>

      </Grid>
    </div>
  )
}

export default Signup
