/// Required Packages ///

const express = require('express');
const router = express.Router();
const {getAllProducts, getAllProductsStatic} = require('../controllers/products');


///// SET UP ROUTES  ////

router.route('/').get(getAllProducts); // Default route calls controller method
router.route('/static').get(getAllProductsStatic);


// EXPORT CONSTANT VARIABLE 

module.exports = router;

