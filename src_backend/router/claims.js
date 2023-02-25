const express = require('express')
const Claims = require('../models/insuranceClaims')
const claimsRouter = new express.Router()
var pool = require ("../config");

claimsRouter.get('/view',function(req,res) {
    const employeeID = req
    pool.query("SELECT * FROM InsuranceClaims WHERE employeeId = req.employeeID", function (err, result) {
      if (err) throw err;
      else {
        res = result;
        obj = {print: result};
        console.log(obj);
      }
    })
  })

claimsRouter.get('/viewAll',function(req,res) {
    pool.query("SELECT COUNT(ClaimID) FROM InsuranceClaims", function (err, result) {
      if (err) throw err;
      else {
        res = result;
        obj = {print: result};
        console.log(obj);
      }
    })
  })

claimsRouter.get('/viewStatus',function(req,res) {
    const claimDetails = req.split(',')
    const employeeID = claimDetails[0]
    const status = claimDetails[1]
    pool.query("SELECT * FROM InsuranceClaims WHERE employeeId = employeeID AND status = status", function (err, result) {
      if (err) throw err;
      else {
        res = result;
        obj = {print: result};
        console.log(obj);
      }
    })
  })

claimsRouter.get('/viewPurpose',function(req,res) {
    const claimDetails = req.split(',')
    const employeeID = claimDetails[0]
    const purpose = claimDetails[1]
    pool.query("SELECT * FROM InsuranceClaims WHERE employeeId = employeeID AND purpose = purpose", function (err, result) {
      if (err) throw err;
      else {
        res = result;
        obj = {print: result};
        console.log(obj);
      }
    })
  })

claimsRouter.post('/createClaim',function(req,res) {
    const claimDetails = req.split(',')
    const claimID = Math.random()
    const insuranceID = claimDetails[0]
    const firstName = claimDetails[1]
    const lastName = claimDetails[2]
    const expenseDate = claimDetails[3]
    const amount = claimDetails[4]
    const purpose = claimDetails[5]
    const followUp = claimDetails[6]
    const previousClaimID = claimDetails[7]
    const status = 'Pending'
    const lastEditedClaimDate = new Date().toJSON()
    pool.query("INSERT INTO table_name VALUES (claimID, insuranceID, firstName, lastName, expenseDate, amount, purpose, followUp, previousClaimID, status, lastEditedClaimDate);", function (err, result) {
      if (err) throw err;
      else {
        res = result;
        obj = {print: result};
        console.log(obj);
      }
    })
  })

  module.exports = claimsRouter