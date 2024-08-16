/*============================================================
        ROUTES associated with JOBS

            1. Register => Controller
            2. Login => Controller
============================================================*/


///// Packages
const express = require("express");
const router = express.Router();

const {getAllJobs, getSingleJob, createSingleJob, updateSingleJob, deleteSingleJob} = require('../controllers/jobs')

/////-------------------------------------------------------


//////// TWO ROUTES and the Controller referenced for each HTTP Method

router.route('/').post(createSingleJob).get(getAllJobs);
router.route('/:id').get(getSingleJob).delete(deleteSingleJob).patch(updateSingleJob);



module.exports = router;