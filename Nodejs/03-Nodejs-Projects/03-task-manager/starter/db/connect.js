/*================================================================
    This file sets the connection to a mongo database
    using imported mongoose package

    A function is created accepting a url parameter
    with a call back function to mongoose.connect function 
    passing the url parameter and setting some options 
=================================================================*/

const mongoose = require("mongoose"); // Object Data Modeling Library


const connectDB = (url)=>{
    mongoose.connect(url,{
        useNewUrlParser: true, 
        useCreateIndex: true, 
        useFindAndModify: false, 
        useUnifiedTopology: true});
  
};


module.exports = connectDB;

