/*==============================================================================

===============================================================================*/

//----------- PACKAGES ----------------------------------------

require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();

// connectDB
const connectDB = require("./db/connect"); //Imports the connect function
// routers

const authRouter = require('./routes/auth');
const jobsRouter = require('./routes/jobs');

// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.json());

// extra packages

//===================================================================================


//----------------  ROUTES---------------------------------------------

//Test route a root level
app.get('/', (req, res) => {
  res.send('jobs api');
});

// Two Main API Routes
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', jobsRouter)

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

//======================================================================================

const port = process.env.PORT || 3000;

//---------------  MAIN ---------------------------------------------------------------

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI+process.env.DB); 
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

//----- ENVOKE MAIN -----

start();
