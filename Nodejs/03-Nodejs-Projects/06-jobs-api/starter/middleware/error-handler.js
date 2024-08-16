//const { CustomAPIError } = require('../errors')
const { StatusCodes } = require('http-status-codes')
//==================================================================

const errorHandlerMiddleware = (err, req, res, next) => {

  //console.log(err);
  
  let customError ={ //set Default
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg:err.message || 'There was an issue. Please try again later'
  }
  
 //if (err instanceof CustomAPIError) {    
   // return res.status(err.statusCode).json({ msg: err.message })
 // }
  if (err.name === 'ValidationError'){

    customError.msg = Object.values(err.errors).map((item)=>item.message).join(',');
    customError.statusCode(StatusCodes.BAD_REQUEST);

  }

  if(err.code && err.code === 11000){ //Checking specifically for Mongoose Duplicate key error

      customError.msg = `Duplicate value entered. ${Object.keys(err.keyValue)} used already exists, pleae choose another value`;
      customError.statusCode = StatusCodes.BAD_REQUEST; //400 error code
  }
  
  if(err.name === 'CastError')
  {
    customError.msg = `No item found with id: ${err.value}`;
    customError.statusCode(StatusCodes.BAD_REQUEST);
  }

  //return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err })  // Shows raw error for testing
   return res.status(customError.statusCode).json({ msg: customError.msg })
}

module.exports = errorHandlerMiddleware
