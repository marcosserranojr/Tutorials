/*==========================================================================
    This custom class inherits from the ERROR class vis "extends"

    Since this is a child class we user "super" to invokes a constructor of 
    the parent class

    "THIS" creates a property for this class

===========================================================================*/
class CustomAPIError extends Error{
    constructor(message, statusCode){ //Constructor 
        super(message)
        this.statusCode = statusCode
    }
}

//This method is used to invoke the class that inherits from Parent ERROR class
const createCustomError=(message, statusCode)=>{
    return new CustomAPIError(message,statusCode);
}

module.exports={createCustomError, CustomAPIError}