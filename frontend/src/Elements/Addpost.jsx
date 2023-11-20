import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Addpost = () => {
  const [post,setPost] = useState({
    postTitle:'',
    typePost:'',
    imageUrl:''
  });
  const navigate= useNavigate();
  const postHandler = (e)=>{
    setPost({...post,[e.target.name]:e.target.value})
  }
  const addPost=(e)=>{
    axios.post('http://localhost:3456/blogs/post',post).then((res)=>{
      alert(res.data);
    })
    navigate('/view')
  }
  return (
    <div style={{margin:'6%'}}>
      <TextField variant='outlined' label='Post title' fullWidth name='postTitle' onChange={postHandler}/>
      <br /><br />
      <TextField variant='outlined' label='Type a post' fullWidth multiline name='typePost' rows={10} onChange={postHandler}/>
      <br /><br />
      <TextField variant='outlined' label='Image URL' name='imageUrl' fullWidth onChange={postHandler}/>
      <br /><br />
      
      <Button variant='contained' color='secondary' onClick={addPost}>
        Submit
      </Button>
    </div>
  )
}

export default Addpost
