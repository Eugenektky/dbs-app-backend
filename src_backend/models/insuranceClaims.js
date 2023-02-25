const mongoose = require('mongoose')
const claimsSchema = new mongoose.Schema({
    "claimID": Number,
    "insuranceID": Number,
    "firstName": String,
    "lastName": String,
    "expenseDate": String,
    "amount": Number,
    "purpose": String,
    "followUp": Boolean,
    "previousClaimID": Number,
    "status": String,
    "lastEditedClaimDate": String
})

const Claims = mongoose.model('claims', claimsSchema)
module.exports = Claims