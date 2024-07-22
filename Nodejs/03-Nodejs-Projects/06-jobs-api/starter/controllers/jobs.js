/*==================================================================
                        JOB LISTING CONTROLLERS

    logic code referenced by your job routes
=====================================================================*/

///// PACKAGES


//==================================================================

const getAllJobs = async (req, res) => {
    
    res.send("GET all JOBS");
}

const getSingleJob = async (req, res) => {
    
    res.send("GET Single JOB");
}

const createSingleJob = async (req, res) => {
    
    res.send("DELETE Single JOB");
}

const updateSingelJob = async (req, res) => {
    
    res.send("UPDATE Single JOB");
}

const deleteSingelJob = async (req, res) => {
    
    res.send("DELETE Single JOB");
}


module.exports= {getAllJobs,getSingleJob, createSingleJob, updateSingelJob, deleteSingelJob};