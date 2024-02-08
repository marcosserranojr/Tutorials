/*================================================================
    This middleware file adds a function that extracts
    the try catch functionality from every controller 
    and centralizes its functionality here in this function

    1. - This function takes a function and returns asynchronous
        information.
    2. - Async since a promise is used via the "await" within the 
        try catch.
    3.- the promise "await" is waiting on the passed function's 
        async process to complete successfully in the TRY or CATCH
        a ERROR.
=================================================================*/

const asyncWrapper = (fn)=>{    
    return async (req, res, next)=>{
        try{
            await fn(req,res,next)
        } 
        catch(error)
        {
            next(error);
        }
    }

}
module.exports=asyncWrapper;