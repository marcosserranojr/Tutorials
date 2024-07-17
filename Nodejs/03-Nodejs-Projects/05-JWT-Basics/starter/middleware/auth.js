/*=====================================================================
==  Manages the logic for authorization via a web token
==
==      1. Pulls the authorization portion from the headers
==      2. Ensures it exists and has Bearer info
==      3. Extracts the token from the Auth header 
==      4. Verifies the token via the stored secret
=======================================================================*/

const jwt = require('jsonwebtoken');
const { UnauthenticatedError} = require('../errors/index.js');
//=============================================================================


const authenticationMiddleware = async (req, res, next)=>{

    //console.log(req.headers.authorization);
    const authHeader = req.headers.authorization

    if(!authHeader || !authHeader.startsWith('Bearer '))
        {
            throw new UnauthenticatedError ('No Token provided');
        }

    const token = authHeader.split(' ')[1]; // removes the bearer part of the authorization header and returns token only
    
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET); 
        const {id, username} = decoded;
        req.user = {id, username} 
        next();      
        
    } catch(error){
        throw new UnauthenticatedError ('Not authorized to access this route');
        
    }  
    
}

module.exports = authenticationMiddleware;