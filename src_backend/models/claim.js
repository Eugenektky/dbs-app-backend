const mongoose = require('mongoose')

const claimSchema = new mongoose.Schema({
    claimID: {
        type: String,
        required: true,
        trim: true
    },
    insuranceID: {
        type: String,
        required: true,
        trim: true
    },
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    expenseDate: {
        type: String,
        required: true,
        trim: true
    },
    amount: {
        type: Number,
    },
    purpose: {
        type: String,
    },
    followUp: {
        type: Number,
    },
    previousClaimID:{
        type: null,
    },
    status: {
        type: String,
    },
    lastEditedClaimDate: {
        type: String,
    }
})

const claim = mongoose.model('claims', claimSchema)

module.exports = claim