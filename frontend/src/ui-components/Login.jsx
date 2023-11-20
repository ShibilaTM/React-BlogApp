import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, Navigate ,useNavigate} from "react-router-dom";
import axios from 'axios'
import '../App.css'

const Login = () => {
    const navigate = useNavigate();
    const[user,setUser] = useState({
      email:'',
      password:''
    });
    const inputHandler = (e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const addHandler = () => {
      console.log(user);  // Check if user object is correct
      axios.post('http://localhost:3456/user/login', user)
          .then((res) => {
              alert(res.data.message);
              if (res.data.message === 'success') {
                  sessionStorage.setItem('userToken', res.data.token);
                  navigate('/view');
              }
          })
          .catch((error) => {
              console.error(error);
          });
  };
  
  return (
    <div style={{ marginTop: "100px" }} className="App">
      <Typography variant="h3" style={{ color: "purple" }}>
        BlogApp Login
      </Typography>
      <br />
      <br />
      <TextField variant="outlined" label="email" name="email" onChange={inputHandler} />
      <br />
      <br />
      <TextField variant="outlined" label="password" name="password" type="password" onChange={inputHandler} />
      <br />
      <br />
      <Button variant="contained" color="secondary" onClick={addHandler}>
        LogIn
      </Button>
      <br />
      <br />
      <br />
      <Typography>
        <Link to={"/sign"}>New users click here</Link>
      </Typography>
    </div>
  );
};

export default Login;