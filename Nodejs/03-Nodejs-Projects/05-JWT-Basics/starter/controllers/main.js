/* STEPS CONTROLLERS LOGIC FOLLOWS

    1. Check username and password - POST login request
    2. If exists then create a JWT
    3. Send token to front end
    4. Setup Authentication so only JWT requests can access dashboard
============================================================================================*/

const jwt = require('jsonwebtoken');
const {BadRequestError} = require('../errors/index.js');
//const CustomAPIError = require('../errors/custom-error')


//////////////////////////////////////////////////////////////////////////////////////////////

const login = async ( req, res)=>{
    
    const {username, password} = req.body // setting up to pass this info via url
    
    //console.log(username, password);

    if(!username || !password)
    {
       
        throw new BadRequestError('Please provide Email and Password');

    }
    else{
        const id = new Date().getDate();
        const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'}); //Here is were the token is signed 
        res.status(200).json({msg:'user created', token});       
    }
    
}

//---------------------------------------------------------------------------------------------------------------
const dashboard = async (req, res) =>{
    
    const username = req.user.username;

    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({msg: `Hello, ${username}`, secret:`Here is your authorized data, your lucky number is  ${luckyNumber}`})   

}

module.exports={ login, dashboard}