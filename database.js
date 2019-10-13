let mongoose = require('mongoose');
const database = 'user64';    
//mongodb://pawan64:feelsgood64@ds263590.mlab.com:63590/user64
const server = 'mongodb://pawan64:feelsgood64@ds263590.mlab.com:63590';
//const server = 'mongodb+srv://admin:admin123@cluster0-dwjis.mongodb.net'; // REPLACE WITH YOUR DB SERVER

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



