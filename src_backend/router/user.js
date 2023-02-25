const express = require('express')
const User = require('../models/user')
const Claim = require('../models/claim')
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

userRouter.get('/users/:id', (req, res) => {
    
    try{
        res.send('claims')
    } catch (e) {
        res.status(400).send('unable to get claims')
    }
})

module.exports = userRouter