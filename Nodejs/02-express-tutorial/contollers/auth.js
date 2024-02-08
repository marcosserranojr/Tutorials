

authPeople =(req,res)=>{    
    const {name} = req.body;
    if(name){
        return res.status(200).send(`Welcome ${name}`);
    }
    else{
        return res.status(401).send("Please Provide a Name");
    }
};

module.exports = authPeople;