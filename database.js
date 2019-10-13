let mongoose = require('mongoose');
const database = 'shubham';    
//const server = 'mongodb+srv://admin:admin123@cluster0-dwjis.mongodb.net'; // REPLACE WITH YOUR DB SERVER
const server  ='mongodb://shubham:shubham07@ds233268.mlab.com:33268'
module.exports  = class Database {
  constructor() {
    this._connect()
  }
  
_connect() {
     mongoose.connect(`${server}/${database}`)
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error(err)
       })
  }
}



