/*==================================================================
                        JOB LISTING CONTROLLERS

    logic code referenced by your job routes
=====================================================================*/

///// PACKAGES

const Job = require("../models/Job");
const {StatusCodes} = require('http-status-codes');
const {BadRequestError, NotFoundError} = require("../errors/index");
const { process_params } = require("express/lib/router");

//==================================================================

const getAllJobs = async (req, res) => {
    
    const jobs = await Job.find({createdBy:req.user.userID}).sort('createdAt');
    res.status(StatusCodes.OK).json({jobs, count:jobs.length});
}

const getSingleJob = async (req, res) => {
    
    //Nested deconsruction - where user and params are properties of "req" and the new variables 
    // being created based on the values of those properties are userID and jobID
    const{
            user:{userID},
            params:{id:jobID}
         } = req
    //console.log(userID, jobID);
    const job = await Job.findOne({_id:jobID, createdBy:userID}) //_id and createdBy are properties of the Job model and DB
    //console.log(job);
    if(!job){
        throw new NotFoundError(`No Job with id ${jobID} found`)
    }
    res.status(StatusCodes.OK).json({job});
}

const createSingleJob = async (req, res) => {
  
    req.body.createdBy = req.user.userID;    
    const job = await Job.create(req.body);
    res.status(StatusCodes.CREATED).json({job});
    
}

const updateSingleJob = async (req, res) => {
         
    //Nested deconsruction - where user and params are properties of "req" and the new variables 
    // being created based on the values of those properties are assigned to userID and jobID
    const{
        body:{company,position},
        user:{userID},
        params:{id:jobID}
     } = req

     if(company==''|| position==='')
     {
        throw new BadRequestError('Company or Postion fields can not be empty string')
     }
    const job = await Job.findByIdAndUpdate({_id:jobID, createdBy:userID}, req.body,{new:true, runValidators:true});

    //----The method below works to update but does not return the Job object but rather an acknowledgement object------
    //const job = await Job.updateOne({_id:jobID, createdBy:userID}, req.body,{new:true, runValidators:true}) 
    
    if(!job){
        throw new NotFoundError(`No Job with id ${jobID} found`)
    }
    res.status(StatusCodes.OK).json({job});
}

const deleteSingleJob = async (req, res) => {
    
     //Nested deconsruction - where user and params are properties of "req" and the new variables 
    // being created based on the values of those properties are assigned to userID and jobID
    const{        
        user:{userID},
        params:{id:jobID}
     } = req

    const job = await Job.findByIdAndDelete({_id:jobID, createdBy:userID})

    if(!job){
        throw new NotFoundError(`No Job with id ${jobID} found`)
    }


    res.status(StatusCodes.OK).send();
}


module.exports= {getAllJobs, getSingleJob, createSingleJob, updateSingleJob, deleteSingleJob};