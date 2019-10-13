const express = require('express')
const app = express.Router()

let CustomerModel = require('../model/customer')




app.post("/add_cust",(req,res,next)=>{
  console.log("adding customer")
  console.log(req.body)
  let cust = new CustomerModel({
    _cust_id: req.body._cust_id,
    name: req.body.name,
    _booking:null,
  })

  cust.save()

   .then(doc => {
     console.log(doc)
     res.send(doc)
   })
   .catch(err => {
     if(err.code==11000){
         res.send({status:"Duplicate record"})
     }
     console.error(err)
  })
  
})

app.get("/get_all",(req,res,next)=>{
  
    CustomerModel.find({}, 
        function(err, custs) {
          if (err){
            console.log(err)
          }
          res.send(custs)
        }
    );
  
  
})

module.exports = app
