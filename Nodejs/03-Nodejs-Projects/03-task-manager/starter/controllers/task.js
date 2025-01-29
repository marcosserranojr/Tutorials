/*==================================================================
    Controller functions passed to the routes
====================================================================*/
const Task = require("../models/task"); //Imported files
const asyncWrapper = require("../middleware/async")
const {createCustomError} = require("../errors/custom-errors")

//Get 
const getAllTasks = asyncWrapper (async (req,res)=>{
    
        const tasks = await Task.find({});
        //console.log(tasks);
        res.status(200).json({tasks});
   
});
//Post
const createTasks = asyncWrapper (async (req,res,next)=>{
    
        const task = await Task.create(req.body);    
        res.status(201).json({task});
  
        //const {message}=error;
       // res.status(500).json({msg:message});
      
});
//GET
const getSingleTask = asyncWrapper (async (req,res,next)=>{
     
        const{id:taskID} = req.params;
        const task = await Task.findOne({_id: taskID})        

        if(!task){ //Task id does not exist                
                const message = `msg:NOT FOUND! Task id:${taskID}`;
                return next(createCustomError(message, 404));          
        }        
        res.status(200).json({task});       
});
//PUT
const updateTasks = asyncWrapper (async (req,res)=>{
       
        const {id:taskID} = req.params;
        const task = await Task.findByIdAndUpdate({_id: taskID}, req.body,
                                                    {new:true, //returns the updated object vs the one that was used to be updated
                                                     runValidators:true }// Ensures your validators in your models are respected
                                                  );

        if(!task){
                const message = `msg:NOT FOUND! Task id:${taskID}`;
                return next(createCustomError(message, 404));       
        }
        res.status(200).json(task);      
    
});
//DELETE
const deleteTasks = asyncWrapper(async (req,res)=>{
    
        const{id:taskID}=req.params;
        const task = await Task.findOneAndDelete({_id: taskID});

        console.log(task);
        if(!task){
                const message = `msg:NOT FOUND! Task id:${taskID}`;
                return next(createCustomError(message, 404));       
        }
        res.status(200).json(task);     
    
});

module.exports={getAllTasks, createTasks, getSingleTask, updateTasks,deleteTasks};