const User = require('../models/User');
const jwt = require('jsonwebtoken')
const {UnauthenticatedError}=require('../errors/index');
//=============================================================================


//Function is used to verify if a token is provided and if it's a valid token before proceeding
const auth = (req, res, next) =>{

    const authHeader = req.headers.authorization;   

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new UnauthenticatedError ('Authenciation Invlaid')
    }
    
    const token = authHeader.split(' ')[1]    
    try{
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        req.user = {userID: payload.userID, name: payload.name}
        next();
    }
    catch(error){
        throw new UnauthenticatedError('Authentication Invalid');
    }
}

module.exports=auth;