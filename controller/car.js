const express = require('express')
const app = express.Router()

let CarModel = require('../model/car')
let CustomerModel = require('../model/customer')



// add new car
app.post("/add_car",(req,res,next)=>{
  console.log("adding car")
  addCar(req,res)
})


// fliter according to rent, capacity, date and avaibility
app.get("/filter",(req,res,next)=>{

  console.log(req.query)
  
  if(!req.query.capacity){
    req.query.capacity=0
  }
  if(!req.query.rent){
    req.query.rent = 10000000
  }

  CarModel.find({
      rent:{$lte : req.query.rent},
      capacity:{$gte : req.query.capacity},
      booking_status:null
    }, 
      function(err, cars) {
        if (err){
          console.log(err)
        }
        res.send(cars)
      }
  );


})


function addCar(req,res){

  let car = new CarModel({
    vno:req.body.vno,
    model:req.body.model,
    capacity:req.body.capacity,
    rent:req.body.rent,
    booking_status:null
  })

  car.save()
   .then(doc => {
     res.send(doc)
     console.log(doc)
   })
   .catch(err => {
    if(err.code==11000){
      res.send({status:"duplicate vehicle number"})
    }
     console.error(err)
  })
}

module.exports = app
