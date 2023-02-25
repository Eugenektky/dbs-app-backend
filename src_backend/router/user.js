const express = require('express')
const User = require('../models/user')
const userRouter = express.Router()

userRouter.post('/user/login', (req, res) => {

    const user = new User(req.body)
    try{
        user.save()
        res.send(user)
    }catch(e){
        res.send('unable to login')
    }
})

module.exports = userRouter