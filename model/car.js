let mongoose = require('mongoose')
let validator = require('validator')
let BookingStatus = require('../model/booking');

//booking_status = new BookingStatus()

let carschema = new mongoose.Schema({

  vno: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  model:{
      type: String
  },
  capacity:{
      type:Number
  },
  rent:{
      type: Number
  },
  booking_status:{type:BookingStatus}

})

module.exports = mongoose.model('Car', carschema)