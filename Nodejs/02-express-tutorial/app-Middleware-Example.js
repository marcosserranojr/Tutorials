/*================================================================
                    Express Middleware

    Are functions that execute during the request to the server
    Each Middleware functions have access to request and result objects  

        URL: http://expressjs.com/en/4x/api.html#app.use


    Keep in mind the difference between use vs manually adding middleware to the route

    Middleware options : 1. Own functions, 2. Express functions, 3. Third party
=================================================================*/

const express = require("express");
const app = express();

//Our own middleware functions
const logger = require("./logger"); 
const authorize = require("./authorize");

//example of Express built in  middleware functions which is static
app.use(express.static('./public'));

//example of third party middleware functions
const morgan = require('morgan');



//app.use([logger, authorize]); // The .use method once invoked enables you to pass a functions to every method app uses.
                              // passing more than on function requires to place them in an array

// request => Middelware => result
//Request will come in then something happens via a function and then the result is returned
//Here we call the middle ware logger function manually but a better way is the app.use method
app.get('/',logger,(req,res)=>{   

   res.send("HOME");
});

app.get('/about',morgan('tiny'),(req,res)=>{
    console.log(morgan); //Notice the information that is provided in console
    res.send("ABOUT PAGE");
 });

 app.get('/api/products',authorize,(req,res)=>{
    console.log(req.user); // Let vew this property attached to the request object in the authorized function
    res.send("PRODUCTS");
 });


app.listen(5000, ()=>{
    console.log('server is listening on Port 5000');

});

