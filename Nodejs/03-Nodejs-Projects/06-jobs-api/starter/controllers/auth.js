/*==================================================================
                 AUTHENTICATON CONTROLLERS

    logic code referenced by your authentication routes
=====================================================================*/

///// PACKAGES

const User = require('../models/User');
const {StatusCodes}= require('http-status-codes');
const {BadRequestError}= require('../errors/index');

//const jwt = require('jsonwebtoken');

//const bcrypt = require('bcryptjs'); used when implemented here

//==================================================================

const register = async (req, res) => {

    // a user object based on the schema is created using the data from the post api call and assigned to a user object variable
   const user = await User.create({...req.body});  
   const token = user.createJWT();//Call the method from User.js in models 
   res.status(StatusCodes.CREATED).json({user:{name: user.name}, token});
        
   /*------- THIS FUNCTIONALITY IS ESSENTIAL DEFINED IN THE MODEL and handeld by MongoDB

   const {name, email, password} = req.body;

   if(!name || !email || !password){

    throw new BadRequestError('Please Provide the missing Name, Email, or Password');
   }*/


/*-------- THIS FUNCTIONALITY WAS MOVED TO THE MODEL User.js for a cleaner approach

   const {name, email, password} = req.body;

   const salt = await bcrypt.genSalt(10);// created a random byte
   const hashedPassword = await bcrypt.hash(password, salt); // hash the password against the random byte

   const tempUser ={name, email,password:hashedPassword}
   
   
 ------- This was commented out and moved to the user model -------------------------------------------------

   ------ a user object based on the schema is created using the data from the call and assigned to a user variable
   const user = await User.create({...req.body});  

   console.log(user);//View object
   ----------Token created with payload of json object userID and name with data from properties of object assigned to user -------------  
   const token = jwt.sign({userID:user._id, name: user.name}, 'jwtsecret', {expiresIn: '30d'})
   ----------Returned is a then an json object with two keys - user/token. The user is an object of 1 key and data from a property of the 'user' object --------
   res.status(StatusCodes.CREATED).json({user:{name: user.name}, token});
   */  

}

const login = async (req, res) => {
    
    res.send(" Login User");
}

module.exports= {register, login};