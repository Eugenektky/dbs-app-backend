const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize('sqlite::memory:')

const claim = sequelize.define('claims', {
    claimID: {
        type: DataTypes.STRING,
    },
    insuranceID: {
        type: DataTypes.STRING,
    },
    firstName: {
        type: DataTypes.STRING,
    },
    lastName: {
        type: DataTypes.STRING,
    },
    expenseDate: {
        type: DataTypes.STRING,
    },
    amount: {
        type: DataTypes.NUMBER,
    },
    purpose: {
        type: DataTypes.STRING,
    },
    followUp: {
        type: DataTypes.NUMBER,
    },
    previousClaimID:{
        type: DataTypes.NULL,
    },
    status: {
        type: DataTypes.STRING,
    },
    lastEditedClaimDate: {
        type: DataTypes.STRING,
    }
})

module.exports = claim