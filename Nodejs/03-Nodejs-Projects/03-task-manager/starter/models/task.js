/*===========================================================================

    The file creates data model via the mongoose.schema constructor
    that ends up being treated as a document

    Ref: https://mongoosejs.com/docs/models.html
==============================================================================*/
const mongoose = require("mongoose"); //Importing

//Creating the Database Schema
const TaskSchema = new mongoose.Schema({
    name:{
            type:String, 
            required:[true,"Must Provide Name"],
            trim:true,
            maxlength:[20,'Task Name can not be more than 20 characters']
        },
    completed:{
            type:Boolean,
            default:false
        }
});

module.exports = mongoose.model("Task",TaskSchema);