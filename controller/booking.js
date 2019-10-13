const express = require('express')
const app = express.Router()

let CarModel = require('../model/car')
let CustomerModel = require('../model/customer')
let BookingSchema = require('../model/booking')


//take cust_id and vno
//issue data
//return data
app.post("/car",(req,res,next)=>{

      //chekes if _cust_id is valid
      //update booking_status of vno
      CustomerModel.find({
       _cust_id: req.body._cust_id}, 
       function(err, cust) {
        if (err){
          console.log(err)
        }
        if(cust.length>0){
            console.log("Found customer")
            bookCar(req,res);
        }
        else{
            res.send({status:"customer dosen't exists"})
        }
        console.log(cust);
    });
})

function bookCar(req,res){

    BookingSchema._cust_id = req.body._cust_id
    console.log(req.body.issue_date + 'T00:00:00.301Z')
    console.log( new Date(req.body.issue_date + 'T00:00:00.301Z'))
    BookingSchema.issue_date =  new Date(req.body.issue_date + 'T00:00:00.301Z'),
    BookingSchema.return_date =  new Date(req.body.issue_date + 'T00:00:00.301Z')

    CarModel.update({
        vno:req.body.vno
        },{$set:{booking_status:BookingSchema}},
    function(err, rest) {
        if(err) throw err;
        console.log(rest)
        res.send({status:"booking successfull"})
    })


}
module.exports = app
