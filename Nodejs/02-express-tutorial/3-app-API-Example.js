/*================================================================
    Express in most cases will be used for two cases

        1. set up an API
        2. server side rendring tmeplates.

    This example will cover topics convering APIs
        1. How to Return API data
        2. Use Route Parameter
        3. Use Query String
=================================================================*/

const express = require("express");
const app = express();
const {products}= require("./data.js"); //Specifically import the data.js File and destructure the products object from data file 

// Root or home directory or path
app.get('/', (req,res)=>{

    //res.json([{Name:'Joe'},{Name:'Jim'}]);
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>')
});

// Here we only return an object with only the elements we want to show vs all the information
app.get('/api/products',(req, res)=>{ 
    const newProducts = products.map((product)=>{
        const {id, name, image} = product;
        return{id,name,image};
    })   
    res.json(newProducts);
});

// Here we only return the product with ID 1 uder the URL ending in 1
app.get('/api/products/1',(req, res)=>{ 
    const singleProduct = products.find((product)=>product.id === 1)    
     
    res.json(singleProduct);

});

//Here we use a route parameter to hold the product ID passed in the url
app.get('/api/products/:productID',(req, res)=>{ 
      
    console.log(req.params); // We console log the object that contains route parameter we appended to the URL
    
    const {productID} = req.params; //Destructure the object since we only want the value of the product ID
    console.log(productID); //Here we show the value 

    const singleProduct = products.find(
        (product)=>product.id === Number(productID) // We use the parameter and ensure its compared as a number
        
        );    
     if (!singleProduct){ // If the object is undefined based on the route parameter passed

        return res.status(404).send("<h1>Product Does Not Exist</h1>");
     }

    return res.status(200).json(singleProduct);

});

//Here we use a query string 
app.get('/api/v1/query',(req,res)=>{

    console.log(req.query); //Using query property 
    const {search, limit}= req.query;
    let sortedProducts = [...products];
    if (search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search);
        })
    }
    if (limit){
        sortedProducts = sortedProducts.slice(0,Number(limit));
    }
   
    return res.status(200).json(sortedProducts);
});




app.listen(5000, ()=>{
    console.log('server is listening on Port 5000');

});

