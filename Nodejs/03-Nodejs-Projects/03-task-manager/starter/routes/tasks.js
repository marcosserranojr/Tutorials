/*======================================================
    These are the routes used by the taskmanager frontend
    found under the publics folder
=========================================================*/

const express = require("express");
const router = express.Router();
const {getAllTasks, createTasks, getSingleTask, updateTasks, deleteTasks} = require('../controllers/task') //Import the controller functions into a destructured object

//===============================================================
// ROUTES
router.route('/').get(getAllTasks).post(createTasks);
router.route('/:id').get(getSingleTask).patch(updateTasks).delete(deleteTasks);



module.exports=router;