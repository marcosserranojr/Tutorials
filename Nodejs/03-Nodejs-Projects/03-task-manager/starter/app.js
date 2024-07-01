/*=====================================================================================

    This example uses static front end code within the public folder to create an app
    that allows you to manage tasks.

        1. Add task and displays them.
        2. Delete tasks.
        3. Edit tasks.

     REST API call functionality (get,post,put,delete) lies within the "Controller" directory which import and call functions that
     dictate the routes for the calls that lie within the "Routes" directory".

     The function to establish a database connection via the "Mongoose" module lies
     within the "DB directory" and envoked here "app.js" within the start function.

     The "Models" directory contains the dictated schema for the data stored in the mongo database and the
     connection string is passed via the .env file

=======================================================================================*/

/*===========================================================================================
   Imports
===============================================================================================*/

const express = require('express'); // Imports Express Module
const app = express(); //Invokes Express as app
const connectDB = require("./db/connect"); //Imports the connect function
require("dotenv").config(); //Enables the use of environment variables found in the .env file
const tasks = require('./routes/tasks'); //Importing task routes
const notFound = require('./middleware/not-found');
const errorHandlerMiddleWare = require("./middleware/errorHandler.js");

//=====================================================================
// Middleware 
//=========================================================================

app.use(express.json());  //enable the use of data as json

app.use(express.static("./public")); //Access the static content in the public directory

/*================================================================================================
    ROUTES
==================================================================================================*/

app.use('/api/v1/tasks', tasks); //Setting default route to locate all task routes

app.use(notFound); //Sets custom error when route is not found

app.use(errorHandlerMiddleWare); // Error handling 

//======================================================================================
// Express server PORT
const port = process.env.PORT;

//============================================================================================
// Database Connection
// Anychronous function that calls a promise in the form of the DB connection function imported
const start= async ()=>{
    try{
        await connectDB(process.env.MONGO_URI+process.env.DB); 
        app.listen(port, console.log(`Sever is listening on port ${port}...`));       
    }
    catch(error){console.log(error)}
};

start(); //Envoke the function





