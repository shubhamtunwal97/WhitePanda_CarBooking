let mongoose = require('mongoose')
let validator = require('validator')

let bookingschema = new mongoose.Schema({

  _cust_id : {type: String},
  issue_date : {type:Date},
  return_date : {type:Date}

})

module.exports = bookingschema