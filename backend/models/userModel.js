const mongoose = require('mongoose')
require('dotenv').config()
mongoose.connect(process.env.MONGO_URL);

const Schema = mongoose.Schema({
    email:String,
    password:String,
    pnone:Number
})
const UserData = mongoose.model('userdata',Schema)
module.exports = UserData