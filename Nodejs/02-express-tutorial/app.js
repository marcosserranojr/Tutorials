/*================================================================
          This example explains the Express Router

          Note: The routes folder was created and is used in this example

          The we take the functionality within the router page and move it
          to the controllers file creating functions that are exported and passed
          to the router file.

          Note: The controller folder was created and is used for this example

=================================================================*/

const express = require("express");
const app = express();
const peopleRouter = require("./routes/people"); // This imports the file with all paths for people
const authRouter = require("./routes/auth");
//Static assests
app.use(express.static('./methods-public'));

//parse from data URL: http://expressjs.com/en/4x/api.html#express.urlencoded
app.use(express.urlencoded({extended:false}));

//parse JSON data middleware
app.use(express.json());

//Base route is set and will always be api/v1/people
app.use('/api/v1/people',peopleRouter); // here we applys the middleware router file
//Base route for login
app.use('/login',authRouter);//This route is redirected from the html form off the root of the site

app.listen(5000, ()=>{
    console.log('server is listening on Port 5000');
});

