let {people} = require("../data");

const getPeople = (req,res)=>{   
    
    res.status(200).json({success: true, data:people})   
};

const createPerson = (req,res)=>{   
    const{name} = req.body;
    if(!name){
        return res.status(400).json({success:false, msg:'Please provide a value for name'});
    }
    else{
        return res.status(201).json({success:true,person:name});
    } 
};

const createPersonPostman = (req,res)=>{
    const {name} = req.body;
    if(!name){
       return res.status(400).json({success:false,msg:'Please provide a name'});
    }
    return res.status(201).json({success:true,data:[...people,name]});
};


const updatePerson = (req,res)=>{

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
};

const deletePerson = (req,res)=>{

    const {id} = req.params;
    const person = people.find((person)=>person.id === Number(id));
    console.log(person);

    if(!person){
        return res.status(404).json({success:false,msg:`No person with ID: ${id} was found`});
    }

    const newPeople = people.filter((person)=>person.id !== Number(id)); // Not deleting Data just filtering it out for example purposes

    res.status(200).json({success:true, data: newPeople});

};

module.exports = {getPeople, createPerson, createPersonPostman, updatePerson,deletePerson};