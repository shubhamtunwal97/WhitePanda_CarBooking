let mongoose = require('mongoose');
const database = 'test';    
const server = 'mongodb+srv://admin:admin123@cluster0-dwjis.mongodb.net'; // REPLACE WITH YOUR DB SERVER

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



