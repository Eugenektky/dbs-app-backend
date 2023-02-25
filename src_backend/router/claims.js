const express = require('express')
const Claims = require('../models/insuranceClaims')
const claimsRouter = new express.Router()
var pool = require ("../config");
claimsRouter.use(express.json())

claimsRouter.post('/view',function(req,res) {
    const employeeID = req.body.employeeID
    pool.query(`SELECT b.* FROM (
        (SELECT InsuranceID FROM InsuranceData.InsurancePolicies
        WHERE EmployeeID =` + employeeID + `) AS a 
        LEFT JOIN InsuranceData.InsuranceClaims AS b
        ON a.InsuranceID = b.InsuranceID);`, function (err, results, field) {
      if (err) {
        res.status(400).json({error:'400'})
      } else {
        res.status(200).json(results);
      }
    })
  })

// claimsRouter.get('/viewAll',function(req,res) {
//     pool.query("SELECT COUNT(ClaimID) FROM InsuranceClaims", function (err, result) {
//       if (err) throw err;
//       else {
//         res = result;
//         obj = {print: result};
//         console.log(obj);
//       }
//     })
//   })

claimsRouter.post('/viewStatus',function(req,res) {
    const employeeID = req.body.employeeID
    const status = req.body.status
    pool.query(`SELECT b.* FROM (
        (SELECT InsuranceID FROM InsuranceData.InsurancePolicies
        WHERE EmployeeID =` + employeeID + `) AS a 
        LEFT JOIN InsuranceData.InsuranceClaims AS b
        ON a.InsuranceID = b.InsuranceID)
        WHERE Status = "` + status +`";`, function (err, results, field) {
        if (err) {
            res.status(400).json({error:'400'})
            } else {
            res.status(200).json(results);
            }
    })
  })

// claimsRouter.get('/viewPurpose',function(req,res) {
//     const claimDetails = req.split(',')
//     const employeeID = claimDetails[0]
//     const purpose = claimDetails[1]
//     pool.query("", function (err, result) {
//       if (err) throw err;
//       else {
//         res = result;
//         obj = {print: result};
//         console.log(obj);
//       }
//     })
//   })

// claimsRouter.post('/createClaim',function(req,res) {
//     const claimDetails = req.split(',')
//     const claimID = Math.random()
//     const insuranceID = claimDetails[0]
//     const firstName = claimDetails[1]
//     const lastName = claimDetails[2]
//     const expenseDate = claimDetails[3]
//     const amount = claimDetails[4]
//     const purpose = claimDetails[5]
//     const followUp = claimDetails[6]
//     const previousClaimID = claimDetails[7]
//     const status = 'Pending'
//     const lastEditedClaimDate = new Date().toJSON()
//     pool.query("INSERT INTO InsuranceData.InsuranceClaims VALUES + (claimID, insuranceID, firstName, lastName, expenseDate, amount, purpose, followUp, previousClaimID, status, lastEditedClaimDate);", function (err, result) {
//       if (err) throw err;
//       else {
//         res = result;
//         obj = {print: result};
//         console.log(obj);
//       }
//     })
//   })

//   claimsRouter.delete('/deleteClaim',function(req,res) {
//     const {claimID} = req.body
//     pool.query("DELETE FROM InsuranceData.InsuranceClaims WHERE claimID=" + claimID, function (err, result) {
//       if (err) throw err;
//       else {
//         res = result;
//         obj = {print: result};
//         console.log(obj);
//       }
//     })
//   })

  module.exports = claimsRouter