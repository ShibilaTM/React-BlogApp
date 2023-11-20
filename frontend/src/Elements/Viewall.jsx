import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import axiosInstance from '../axiosinterceptor'

const Viewall = () => {
  const [cardData, setData] = useState([]);

  useEffect(() => {
    axiosInstance.get('http://localhost:3456/blogs').then((res) => {
      setData(...cardData,res.data); // Set the entire array as the new state
      console.log(cardData);
    })
  }, []);

  return (
    <div style={{ margin: '7%' }}>
      <Grid container spacing={2}>
        {cardData.map((val, i) => (
          <Grid item key={i} xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={val.imageUrl}
                title={val.postTitle}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {val.postTitle}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {val.typePost}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Delete</Button>
                <Button size="small">Update</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Viewall
