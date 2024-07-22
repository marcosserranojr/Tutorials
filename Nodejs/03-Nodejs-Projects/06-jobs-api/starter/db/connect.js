/*================================================================
    This file sets the connection to a mongo database
    using imported mongoose package

    A function is created accepting a url parameter
    with a call back function to mongoose.connect function 
    passing the url parameter and setting some options 
=================================================================*/


const mongoose = require('mongoose')

//=============================================================

const connectDB = (url) =>{
  return mongoose.connect(url, {})
};

module.exports = connectDB
