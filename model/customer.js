let mongoose = require('mongoose')
let validator = require('validator')

let customerschema = new mongoose.Schema({

  _cust_id:{
      type:String,
      unique:true,
  },
  name: {
    type: String,
  },
//   _booking:{
//       type: mongoose.Schema.Types.ObjectId
//   }

})

module.exports = mongoose.model('Customer', customerschema)