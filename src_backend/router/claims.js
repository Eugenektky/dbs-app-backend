const express = require('express')
const Claims = require('../models/insuranceClaims')
const claimsRouter = new express.Router()
var pool = require ("../config");

claimsRouter.get('/view',function(req,res) {
    // const claim = new Claims(req.body)
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
    // const claim = new Claims(req.body)
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
    // const claim = new Claims(req.body)
    pool.query("SELECT * FROM InsuranceClaims WHERE employeeId = req.employeeID AND status = req.status", function (err, result) {
      if (err) throw err;
      else {
        res = result;
        obj = {print: result};
        console.log(obj);
      }
    })
  })

claimsRouter.get('/viewPurpose',function(req,res) {
    // const claim = new Claims(req.body)
    pool.query("SELECT * FROM InsuranceClaims WHERE employeeId = req.employeeID AND purpose = req.purpose", function (err, result) {
      if (err) throw err;
      else {
        res = result;
        obj = {print: result};
        console.log(obj);
      }
    })
  })

  module.exports = claimsRouter