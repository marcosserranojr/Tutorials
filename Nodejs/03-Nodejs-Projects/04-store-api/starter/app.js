//######  All packages included in project ##############||
//-------------------------------------------------------------

//======= Allow environment file to be used
require('dotenv').config(); 
//======= Import Error catching package
require('express-async-errors');
//======= Included EXPRESS package
const express =require('express'); 
const app = express(); // Envoke package
//======= Include Middleware Methods
const notFoundMiddleware = require ('./middleware/not-found');
const errorMiddleware = require ('./middleware/error-handler');
//======= Database connection
const connectDB = require('./db/connect'); 
//======= ROUTER
const productsRouter = require('./routes/products');

//###########################################################||



////// Routes /////////
//--------------------------------

app.get('/', (req,res)=>{

    res.send('<h1>STORE API </h1><a href="/api/v1/products">Products Route</a>');
});
app.use('/api/v1/products', productsRouter)

///// Middleware //////
//------------------------------
app.use(express.json());
app.use(notFoundMiddleware);
app.use(errorMiddleware);


///// MAIN METHOD ///////
//-------------------------------

const port = process.env.PORT;

const start = async()=>{

    try{
        
        //DB Connection
        await connectDB(process.env.MONGO_URI+process.env.DB); 
        app.listen(port, console.log(`SERVER IS LISTENING PORT ${port}.....`))
    }
    catch(error){
        console.log(error);
    }
}

start (); //Main method envoked