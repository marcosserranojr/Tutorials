/*  The logger function is a middleware function
    we add it to a seperate file inorder to keep app.js cleaner
    NOTE: When you work with middleware you must pass it to the next middleware*/

const logger = (req,res,next)=>{
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method,url,time);
    next(); //Pass it on to the next function invoked.

};

module.exports=logger;