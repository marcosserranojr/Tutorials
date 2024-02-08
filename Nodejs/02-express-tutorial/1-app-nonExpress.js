/*======================================================================================
This example shows how setting up a server and serving up a single web page would function.

  NOTE: All the resources accessed by the server would need to be made available in order
        for the page to render correctly hence the if statements. Using this method for
        a fully functional app would be very time consuming. This is where EXPRESS which
        is not built into node helps speed things up.

========================================================================================*/


const http = require('http');
const {readFileSync} = require('fs');

// get all files
const homePage = readFileSync('./navbar-app/index.html');
const homeStyles = readFileSync('./navbar-app/styles.css');
const homeLogo = readFileSync('./navbar-app/logo.svg');
const homeApp = readFileSync('./navbar-app/browser-app.js');

const server = http.createServer((req, res)=>{
    console.log(req.method,req.url);
    const url = req.url;
    //Home page
    if(url === '/')
    {
        
        res.writeHead(200,{'content-type':'text/html'});
        res.write(homePage);
        res.end();

    }
    //Styles
    else if (url === '/styles.css'){
        res.writeHead(200,{'content-type':'text/css'});
        res.write(homeStyles);
        res.end();

    }
    // Logo
    else if (url==='/logo.svg'){
        res.writeHead(200,{'content-type':'image/svg+xml'});
        res.write(homeLogo);
        res.end();
    }
    // App Js
    else if (url==='/browser-app.js'){
        res.writeHead(200,{'content-type':'text/javascript'});
        res.write(homeApp);
        res.end();
    }
    else{
        res.writeHead(404,{'content-type':'text/html'});
        res.write('<h1>PAGE NOT FOUND<h1>');
        res.end();
    }
});

server.listen(5000);