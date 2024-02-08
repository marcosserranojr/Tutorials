/*================================================================
          This example uses other http methods 

          get - post - put - delete

          Note: The server parts .get .post use the static pages 
                under the methods-public directory

=================================================================*/

const express = require("express");
const app = express();
const {people} = require("./data");


//Static assests
app.use(express.static('./methods-public'));

//parse from data URL: http://expressjs.com/en/4x/api.html#express.urlencoded
app.use(express.urlencoded({extended:false}));

//parse JSON data middleware
app.use(express.json());


app.get('/api/v1/people',(req,res)=>{   
    
    res.status(200).json(people)   
});

//This post uses the html form
app.post('/login',(req,res)=>{    
    const {name} = req.body;
    if(name){
        return res.status(200).send(`Welcome ${name}`);
    }
    else{
        return res.status(401).send("Please Provide a Name");
    }
});

//This post uses the javescript page
app.post('/api/v1/people',(req,res)=>{   
    const{name} = req.body;
    if(!name){
        return res.status(400).json({success:false, msg:'Please provide a value for name'});
    }
    else{
        return res.status(201).json({success:true,person:name});
    } 
});

//New path to test postman
app.post('/api/v1/postman/people',(req,res)=>{
     const {name} = req.body;
     if(!name){
        return res.status(400).json({success:false,msg:'Please provide a name'});
     }
     return res.status(201).json({success:true,data:[...people,name]});
});

//Put method requires ID in path and name in body and used postman to test
app.put('/api/v1/people/:id',(req,res)=>{

    const {id} = req.params;
    const {name} = req.body;

    const person = people.find((person)=>person.id === Number(id));

    if(!person){
        return res.status(404).json({success:false,msg:`No person with ID: ${id} was found`});
    }
    const newPeople = people.map((person)=>  //Map person to people object once person is returned
                    {
                        if(person.id === Number(id))
                        {
                            person.name = name; // If true update name return person object to be mapped to people object
                        }
                        return person        
                    }); 

    res.status(200).json({success:true, data:newPeople})
});

//Delete method and used postman to test

app.delete('/api/v1/people/:id',(req,res)=>{

    const {id} = req.params;
    const person = people.find((person)=>person.id === Number(id));
    console.log(person);

    if(!person){
        return res.status(404).json({success:false,msg:`No person with ID: ${id} was found`});
    }

    const newPeople = people.filter((person)=>person.id !== Number(id)); // Not deleting Data just filtering it out for example purposes

    res.status(200).json({success:true, data: newPeople});

});

app.listen(5000, ()=>{
    console.log('server is listening on Port 5000');
});

