/*============================================================
        ROUTES used in AUTHENTICATION 

            1. Register => Controller
            2. Login => Controller
============================================================*/

///// Packages
const express = require("express");
const router = express.Router();

const {login, register} = require('../controllers/auth')

/////-------------------------------------------------------


//////// ROUTES and Controller using

router.post('/register', register);
router.post('/login', login);



module.exports = router;