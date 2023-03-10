const express = require('express')
const Claims = require('../models/insuranceClaims')
const claimsRouter = new express.Router()
claimsRouter.use(express.json())
var pool = require ("../db/db_connector.js");

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

  claimsRouter.get('/viewAll',function(req,res) {
    pool.query("SELECT COUNT(ClaimID) AS a FROM InsuranceData.InsuranceClaims;", function (err, result) {
      if (err) {
        res.status(400).json({error: err});
      } else {
        const number = result[0].a;
        res.status(200).json({number: number});
      }
    })
  })

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

  claimsRouter.post('/viewPurpose',function(req,res) {
    const employeeID = req.body.employeeID
    const purpose = req.body.purpose
    pool.query(`SELECT a.InsuranceType, b.* FROM (
        (SELECT InsuranceID, InsuranceType FROM InsuranceData.InsurancePolicies
        WHERE EmployeeID = ` + employeeID + `) AS a 
        LEFT JOIN InsuranceData.InsuranceClaims AS b
        ON a.InsuranceID = b.InsuranceID)
        WHERE InsuranceType ="` + purpose + `";`, function (err, results, field) {
        if (err) {
            res.status(400).json({error:'400'})
            } else {
            res.status(200).json(results);
            }
    })
  })

claimsRouter.post('/createClaim',function(req,res) {


    pool.query(`SELECT MAX(ClaimID) AS a FROM InsuranceData.InsuranceClaims;`, function (err, results, field) {
        if (err) {
            res.status(400).json({error:err})
            } else {
            var claimID = 0
            claimID = results[0].a + 1
            const insuranceID = req.body.InsuranceID
            const firstName = req.body.FirstName
            const lastName = req.body.LastName
            const expenseDate = req.body.ExpenseDate
            const amount = req.body.Amount
            const purpose = req.body.Purpose
            const followUp = req.body.FollowUp
            const previousClaimID = req.body.PreviousClaimID
            const status = req.body.Status
            const lastEditedClaimDate = req.body.ExpenseDate

            const claimValues = '("' + claimID + '", "' 
                                + insuranceID + '", "' 
                                + firstName + '", "' 
                                + lastName + '", "' 
                                + expenseDate + '", "' 
                                + amount + '", "' 
                                + purpose + '", "' 
                                + followUp + '", "' 
                                + previousClaimID + '", "' 
                                + status + '", "' 
                                + lastEditedClaimDate + '")' 
                
            pool.query(`INSERT INTO InsuranceData.InsuranceClaims VALUES ` + claimValues + `;`, function (err, results, field) {
                if (err) {
                    res.status(400).json({error:err})
                    } else {
                    res.status(200).json(results);
                    }
            })
        }
    })
    
  })

  claimsRouter.delete('/deleteClaim',function(req,res) {
    const claimID = req.body.claimID
    pool.query("DELETE FROM InsuranceData.InsuranceClaims WHERE claimID=" + claimID, function (err, results, field) {
        if (err) {
            res.status(400).json({error:err})
            } else {
            res.status(200).json(results);
            }
    })
  })

//   claimsRouter.post('/updateClaim',function(req,res) {
//     const claimID = req.body.claimID
//     pool.query("DELETE FROM InsuranceData.InsuranceClaims WHERE claimID=" + claimID, function (err, results, field) {
//         if (err) {
//             res.status(400).json({error:err})
//             } else {
//             res.status(200).json(results);
//             }
//     })
//   })

  module.exports = claimsRouter