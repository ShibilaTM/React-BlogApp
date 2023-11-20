const mongoose = require('mongoose')
const schema = mongoose.Schema
const bcrypt = require('bcrypt')

const addSchema = new mongoose.Schema({
    postTitle:String,
    typePost:String,
    imageUrl:String

})
const addpost = mongoose.model('blogdata',addSchema)
module.exports=addpost