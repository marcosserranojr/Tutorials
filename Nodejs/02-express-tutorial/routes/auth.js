/*===================================
    This example removes the login 
    functionality from App.js
    and adds it to this router file
*/

const express = require('express');
const router = express.Router();
const authPeople = require("../contollers/auth.js");


//This post uses the html form under the Methods-public folder
// That are accessible from localhost:5000/
// Keep in mind those files are accessble via the app.use in App.js file
router.post('/', authPeople);


module.exports = router;