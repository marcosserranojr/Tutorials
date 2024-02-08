
/*  Node specifc topics that need to be understood

    1. Event Loops
    2. Async Patterns
    3. Events Emitter
    4. Streams



/*                  Event Loop
###################################################################
    Allows Node.js to perform non-blocking I/O operations by
    offloading operations to the system kernel
#####################################################################

Java Script is Synchronous and single threaded - meaning Code is process line by line
and waits untill each part is done efore proceeding
*/

//Example below illustrates Synchronous process 
//where the forloop completes then proceeds with next line of code
console.log("#### Synchronous call Example #####")
console.log("This is the first TASK");
console.time();
for (let i = 0; i<10000000; i++){
    if (i==9000000){console.log("Second Task after loop")}
}
console.timeEnd();

console.log('Final Task');

console.log("==============================");

const { result } = require('lodash');
/* #############################################################################
  Browser does provide an api enabling the offload of a task before proceeding to the next
  one even if not complete.
  Example below illustrates this using the timeout method that delays a call in milliseconds
  before calling the callback function that does something or not returning anything or void.*/

/*#########################################################################################
                       NodeJs Event Loop diagram


               call back registered
                /\         =>
                ||
Request => [ EVENT LOOP ]  =>  [DATA]
                ||         <= 
                \/
                Execute call back 


//console.log("###### Offloading example ########")
//console.log('This is the First Task');
//setTimeout(()=>{ //call back
//    console.log("The Second Task");
//},0) //delay set to 0 milliseconds shows the offload and then proceeding with next line eventhough there was no delay.

//console.log("Last Task");




console.log("###### Asyn call example #########")

const {readFile} = require('fs');
console.log('Started First Task');
readFile('./content/first.txt','utf8',(err, result)=>{ //This gets offloaded to event loop while the other steps are process
    if(err){
        console.log(err);
        return;
    }
    console.log(result+"  -This looks to have been offloaded")
    console.log("Completed First Task")
})

console.log ('Starting Next Task');

###################################################################
//Async Patterns - using a promise
####################################################################
*/
// console.log("###### Async Pattern using Promise ########")

// //const {readFile} = require('fs');
// const {readFile, writeFile} = require('node:fs');

// const getText = (path)=>{ // This function return a promise
//     return new Promise((resolve, reject)=>{  //The promise method takes a callback method with method parameters to handle the error and data
//         readFile(path,'utf8',(err,data)=>{ // The call back method just reads the file and returns err or data 
//             if(err){
//                 reject(err);
//             }
//             else{
//                 resolve(data)
//             }
//         })
//     });
// };
// getText('./content/first.txt')
//     .then(result => console.log("Async Promise "+result))
//     .catch(err => console.log(err));


// const start = async()=>{    // The start asynchronous function
//     try{
//         console.log("Starting to READ the files");
//         const first = await getText('./content/first.txt');
//         const second = await getText('./content/second.txt');
//         console.log("Still waiting I think");
//         console.log("Async Promise "+first+" -- " +second);

//     }
//     catch(error)
//     {console.log(error)};
    
// };

// start();


/* ====================================================================
    Cleaner version uses built in library util
    to accomplish the promise portion
======================================================================*/

// console.log("##### Using the Util built in Library to create the promise ########");

// //const {readFile, writeFile} = require('node:fs');
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilesPromise = util.promisify(writeFile);

// async function startRead (){

//     try{
//         const firstFile = await readFilePromise('./content/first.txt','utf8');
//         const secondFile = await readFilePromise('./content/second.txt','utf8');
//         await writeFilesPromise('./content/util-write-result.txt', `Both Files Written -:${firstFile}+" -- "${secondFile}`,{flag:'a'});

//     }
//     catch(error){
//         console.log(error);

//     }

//     console.log("Using Util Promise -- File should have been written to")
// };

// startRead();


/* ====================================================================
    A more streamlined version using the file stream library
    to handle the promise
    
======================================================================*/

// console.log("##### Attaching the promise the the File Stream Library  ########");

// const {readFile, writeFile} = require('node:fs').promises; //uses the readFile and writeFile objects


// const startRead2 = async() =>{
//     try{
//         const firstFile = await readFile('./content/first.txt','utf8');
//         const secondFile = await readFile('./content/second.txt','utf8');
//         await writeFile('./content/util-write-result.txt', `Both Files Written using FS to handle the promise -:${firstFile}+" -- "${secondFile}`,{flag:'a'});

//     }
//     catch(error){
//         console.log(error);

//     }

//     console.log("Using the FS to handle the Promise - File is written to ");
// };

// startRead2();

/*##################################################################
                 Events Emitter 
####################################################################*/
// console.log("============ Events Emitter =========");
 
// const EventEmitter = require ('node:events');
// const customEmitter = new EventEmitter();

// //Point 1 - you can have as many methods as you see fit called by the same emit.
// //Point 2 - Order matters! First we listen for the event and only then we emit them.
// //Point 3 - you can pass the parameters via the emit
// //Point 4 - built in modules use this

// customEmitter.on("response", ()=>{ //"response" acts as the name of the method along with the call back function

//     console.log ("Data Recieved");
// });

// customEmitter.on("response", (name, age)=>{ //"response" is the event we listen for followed by the call back function

//     console.log ("name: "+name + " Age: "+ age);
// });

// customEmitter.emit('response',"Marcos", 47);

// //===================================================================================
// //NOTE: even if you don't create your own events they are a code building blocks of node
// //Alot of built in modules use the listeners


// const http = require ('http');


// //Using Event Emmitter API
// const server = http.createServer();

// //emits request event
// //suscribe to it , listen for it, then respond to it

// server.on('request', (req, res)=>{ // notice the on method is used. The HTTP server class has an event called 'request' which we listen for
//     res.end("Welcome to Page");     // that class extends the class net.server which extends EventEmitter - https://nodejs.org/dist/latest-v18.x/docs/api/net.html#class-netserver

// });
// server.listen(5000);


/*#################################################################
                Streams

    Used to read data sequencially
    Type: Writeable, Readable, Duplex, Transform
####################################################################*/

//Below example is used to create a large file to stream

// const {writeFileSync}= require('node:fs');

// for (let i=0; i<10000; i++){
//     writeFileSync("./content/bigFile.txt", `Hello World ${i}\n`, {flag: 'a'});
// };
// console.log("Big FIle Created and Written to");


//======= ========== Read Stream -- Will read in chuncks around 65kb by default 
//                    and left over at the end. That default can
//size can be controlled

// const {createReadStream} = require ('node:fs');

// //const stream = createReadStream('./content/bigFile.txt'); //Default size

// //const stream = createReadStream('./content/bigFile.txt', {highWaterMark: 90000}); //control size

// const stream = createReadStream('./content/bigFile.txt', {encoding:'utf8'}); //encode

// stream.on('data',(result)=>{  //event we are listening to is data followed by the call back function
//     console.log(result);
// });

// stream.on('error',(err)=>{  // listen to the error event
//     console.log(err);
// });

///============ Show file via browser ====

var http = require("node:http");
var fs = require("node:fs");

http.createServer(function (req,res){

    //======== reads the entire file sending it the to browser ==== old way
        //const text  =fs.readFileSync('./content/bigFile.txt', 'utf8'); 
       // res.end(text);

    //========= Streaming it ==============
        const fileStream = fs.createReadStream('./content/bigFile.txt', 'utf8'); 
        fileStream.on('open', ()=>{
        fileStream.pipe(res); // this methods pushes the read data to write data as it reads it
       });
        fileStream.on('error',(err)=>{
        res.end(err);

       })
})
.listen(5000)

/*/// NOTE: Looking at the response headers notice transfer enconding is now chunked

Connection: keep-alive
Date: Thu, 22 Jun 2023 13:03:49 GMT
Keep-Alive: timeout=5
Transfer-Encoding: chunked
*/