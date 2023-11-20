const express = require('express')
const router = express.Router()
router.use(express.json())
router.use(express.urlencoded({extended:true}))
const jwt = require('jsonwebtoken')
const userData = require('../models/userModel')

router.post('/login', async (req, res) => {
    try {
        console.log(req.body); // Log the received data
        const { email, password } = req.body;

        if (email === 'shibila@gmail.com' && password === 'izzah') {
            let payload = { email: email, password: password };
            let token = jwt.sign(payload, 'reactblogapp');
            res.status(200).send({ message: 'success', token: token });
        } else {
            console.log('Unauthorized'); // Log unauthorized attempts
            res.status(401).send({ message: 'unauthorized' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'server error' });
    }
});


module.exports=router