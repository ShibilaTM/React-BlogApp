const express = require('express')
const app = new express();
require('dotenv').config();
const morgan = require('morgan');
app.use(morgan('dev'))
const cors = require('cors')
const PORT = process.env.PORT
require('./config/db');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const userRoute = require('./routes/userRoutes')
app.use('/user',userRoute)

const blogRoute = require('./routes/blogRoutes')
app.use('/blogs',blogRoute)

app.listen(PORT,()=>{
    console.log(`server is listening on ${PORT}`);
})