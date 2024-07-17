
// APPLICATION ROUTES

/////////// IMPORTS //////////////////////////////
const express = require('express');
const router = express.Router();
const {login, dashboard} = require('../controllers/main');
const authMiddleware = require('../middleware/auth');
//=====================================================================================



router.route('/dashboard').get(authMiddleware,dashboard); //This route requires authentication

router.route('/login').post(login); //Public route

module.exports = router;

