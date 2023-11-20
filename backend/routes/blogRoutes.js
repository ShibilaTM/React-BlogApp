const blogModel = require('../models/blogModel')
const express=require('express')
const router = express.Router() 
const jwt = require('jsonwebtoken')
function verifytoken(req,res,next){
    try {
        const token = req.headers.token
        if(!token) throw 'unauthorized'
        let payload=jwt.verify(token,'reactblogapp')
        if(!payload) throw 'Unauthorized'
        next()
    } catch (error) {
        res.status(401).send('error')
    }
}

router.post('/post',verifytoken,async(req,res)=>{
    try {
        const data = req.body
        const blog = await blogModel(data).save()
        res.status(200).send('posted successfully')
    } catch (error) {
        res.status(404).send(error)
    }
})

router.get('/',verifytoken,async(req,res)=>{
    try {
        const data= await blogModel.find()
        res.status(200).send(data)
    } catch (error) {
        res.send(error)
    }
})



module.exports=router