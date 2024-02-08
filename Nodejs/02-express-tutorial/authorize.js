/* Another simple example of middleware function

    -once the request comes in this function looks at the query string
    -It destructures the object and gets the value of user
    -if user matches joe then assigns the req.user the new value including ID 
    -If it the user does not match joe then Unathorized is returned
*/


const authorize = (req, res, next)=>{
    const {user} = req.query;
    if (user === 'joe'){
        req.user = {name:'joe', id:3}; // Attaching the user property to the request object and now available to app.js file
        next();

    }
    else{
        res.status(401).send("UNAUTHORIZED")
    }

    console.log("Authorized Function -- ","Query String:",req.query,"Destructured Object Value:","'", user,"'", "The new value assigned:", req.user);
    
};

module.exports=authorize;