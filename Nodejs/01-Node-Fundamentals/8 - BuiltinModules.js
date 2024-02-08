//NodeJs built in modules
// OS - PATH - FS - HTTP
////////////////////////////////////////////////
// Enable access to the modules below

const os = require('os'); //OS Built in Module
const path = require('path');
const {readFileSync, writeFileSync} = require('fs'); //Destructure methods from the File system module Synchronous
const {readFile, writeFile} = require('fs');//Destructure methods from the File system module Aynchronous
const http = require ('http'); //HTTP Module


////// OS Module ///////////////////////////////////////////////////////////

//Info about current user
const user = os.userInfo();
console.log(user);
//Method returns system uptime in seconds
console.log(`System Uptime is ${os.uptime()} seconds`);
//Method 
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    feeMem: os.freemem(),
}

console.log(currentOS);


///// Path Module /////////////////////////////////////////////////////////// 

console.log(path.sep);
const filePath = path.join('/content','subfolder', 'test.txt');
console.log("The Normalized Path is: "+filePath); //normalized path
const base = path.basename(filePath);
console.log("The Base is: "+base); // file at the end of the path
const absolute = path.resolve(__dirname, filePath);
console.log("The Absolute Path is: "+absolute);


////// File System Module sychronous approach ///////////////////////////////////////

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
console.log(first, second);

writeFileSync('./content/result-sync.txt',`Here is the result: ${first}, ${second}`,{flag: 'a'}); //Flag passed to append 


//File System Module Asychronous approach/////////////////////////////////////////////////////////

// the destructured Methods require a - File, encoding type, and a call back function

const firstFile = './content/first.txt';
const secondFile = './content/second.txt';
const fileWrite = './content/result-sync.txt';

//Function reads a file Asynchronously 
function filesRead(file){

    readFile(file,'utf8',(error, result)=>{
        if(error){
            console.log(error);
            return;
        }
        else{
            console.log("This file is read Asynchronous the result: "+result);
            return;
        }

    });
};
//Function writes the contents read synchronous from two files but then reads the content of
//the written file Asynchronous using the filesRead function
function fileWritter(file){
    writeFile(file,`Here is the WRITE FILE result: ${first}, ${second}`,(error, result)=>{
        if (error){
            console.log(error);
            return
        }
        filesRead(file);

    });
}

filesRead(firstFile);
filesRead(secondFile);
fileWritter(fileWrite);


//// HTTP MODULE ////////////////////////////////////////////////////////////

//the create server method takes a request and response parameter 
//and a request listener if the form of a function

const server = http.createServer((req, res)=>{
    
    if(req.url==='/'){
        res.end("Welcome to our home Page.")
    }    
    if(req.url ==='/about'){
        res.end("This it the ABOUT Page.")

    }
    res.end(`
             <h1>PAGE DOES NOT EXIST</h1>
             <p>Page was not found</p>
             <a href="/">Back Home</a>
            `);
});

server.listen(5000);