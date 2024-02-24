//###########################################
// Dynamically adds the products.json content
// to the database
//============================================

require('dotenv').config();
const connectDB = require('./db/connect');
const Product = require('./models/product');
const jsonProducts = require('./products.json');




const start = async () =>{

    try{
        await connectDB(process.env.MONGO_URI+process.env.DB); 
        await Product.deleteMany();
        await Product.create(jsonProducts);
        console.log("Database Connection Successful");
        process.exit(0);// Exits 
    }
    catch{
        (error);
        console.log(error);
        process.exit(1);
    }
};

start();