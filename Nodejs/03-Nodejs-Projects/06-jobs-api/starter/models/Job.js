//JOB MODEL

const mongoose = require('mongoose');

//=================================================================

const JobSchema = new mongoose.Schema({

    company:{
        type:String,
        required:[true, 'Please Provide company name'],
        maxlength: 100,
    },

    position:{
        type:String,
        required:[true, 'Please Provide position'],
        maxlength: 100,
    },

    status:{
        type:String,
        required:[true, 'Please Provide company name'],
        enum:['interview','declined', 'pending'],
        default:'pending'
    },
    createdBy:{
        type: mongoose.Types.ObjectId,
        ref:'User',
        required:[true,'Please provide a user']       
    }
},
{timestamps:true})

module.exports = mongoose.model('Job', JobSchema);