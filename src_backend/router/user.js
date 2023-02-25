const express = require('express')
const User = require('../models/user')
const userRouter = new express.Router()

userRouter.post('/users', (req, res) => {
    const user = new User(req.body)
    try{
        user.save()
        res.status(200).send(user)
    }catch(e){
        res.status(400).send('unable to login')
    }
})

module.exports = userRouter