const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const car = require('./controller/car')
const customer = require('./controller/customer')
const booking = require('./controller/booking')

var DataBase = require('./database.js')

db = new DataBase()


app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/car',car)
app.use('/customer',customer)
app.use('/booking',booking)

app.get("/",(req,res,next)=>{
    res.send({status:"welcome"})
})

var port =  process.env.PORT || 80
app.listen(port, () => console.log('Example app listening on port 3000!'))
