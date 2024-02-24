//// CONTROLLER METHODS FOR ROUTES //////
// --------------------------------------------------------

// Required Imports ////
//===== Import Models
const Product = require('../models/product');

//========================================================


///====== Methods =======   


const getAllProductsStatic= async (req, res)=>{
   
    
    const product = await Product.find({});
    res.status(200).json(product);

    
    //res.status(200).json({msg:'TESTING PRODUCTS API ROUTE'})
};

const getAllProducts= async (req, res)=>{

    res.status(200).json({msg:'PRODUCTS API ROUTE'})
};

///EXPORT TO BE ACCSSIBLE

module.exports={ getAllProductsStatic, getAllProducts};