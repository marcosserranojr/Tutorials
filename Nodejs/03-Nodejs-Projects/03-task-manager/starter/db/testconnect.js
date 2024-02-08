/*
    This test connects to DB via url provided
    
    NOTE: This uses Mongo Client and not Mongoose
*/


const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://MongoDBUser:Us3r@cluster0.fjvivng.mongodb.net/ " //"mongodb://localhost:27017";

// Connect to your Atlas cluster
const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();
        console.log("Successfully connected to Atlas");

    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}

run().catch(console.dir);