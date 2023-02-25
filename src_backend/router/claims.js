const express = require('express')
const Claims = require('../models/insuranceClaims')
const claimsRouter = new express.Router()
var pool = require ("../config");

claimsRouter.get('/view',function(req,res) {
    const claim = new Claims(req.body)
    pool.query("SELECT * FROM InsuranceClaims WHERE FirstName = claim.firstName AND LastName = claim.lastName", function (err, result) {
      if (err) throw err;
      else {
        res = result;
        obj = {print: result};
        console.log(obj);
      }
    })
  })

  module.exports = claimsRouter