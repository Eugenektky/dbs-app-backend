const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    EmployeeID: {
        type: String,
        required: true,
        trim: true
    },
    firstname: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
    },
    age: {
        type: Number,
        required: true,
        validate(value){
            if(value < 0){
                throw new Error('Age must be a positive number')
            }
        }
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User