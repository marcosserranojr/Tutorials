/*========================================================

    This is a basic example that shows how to utilize express once the 
    package is installed and saved in the package json

    NOTE:   Using express there was no need to set up statuses 
            content types and access to the resources was handled 
            by the use method. Compare to the nonExpress app js file

=============================================================*/

const express = require('express'); //Import the module
const path = require('node:path');
const app = express(); //Then invoke the module

app.use(express.static('./public')) //This enables the browser to resolve the path to all static files needed to serve the page

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./navbar-app/index.html')); //Note this method was utilized but not standard for returning html files.
                                                                    // the index file would also be considerd static file so it should be placed 
                                                                    //in public folder
})

app.all("*",(req,res)=>{ // Used to capture all other path endpoints no specifically listed

    res.status(404).send('Page Not Found')
})


app.listen(5000,()=>{
    console.log('Listening on Port 5000');

})