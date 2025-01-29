//=====================================================================
// 


const {CustomAPIError} = require("../errors/custom-errors")// Import

const errorHandlerMiddleWare = (err,req,res,next)=>{
    
    const {message}=err

    if (err instanceof CustomAPIError){
        return res.status(err.statusCode).json({msg: message});
    }   
    
    return res.status(500).json({msg: "THERE WAS AN ISSUE PLEASE TRY AGAIN"+message });
};

module.exports = errorHandlerMiddleWare;
