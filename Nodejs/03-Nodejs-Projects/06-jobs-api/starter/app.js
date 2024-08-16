/*==============================================================================

===============================================================================*/

//----------- PACKAGES ----------------------------------------

require('dotenv').config();
require('express-async-errors');

//Extra Security Packages
const helmet = require('helmet');
const cors = require ('cors');
const xss = require('xss-clean');
const rateLimiter = require('express-rate-limit');

//Swagger

const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger-ui.yaml')


// Express
const express = require('express');
const app = express();

// connectDB
const connectDB = require("./db/connect"); //Imports the connect function

//middleware
const authenticateUser = require('./middleware/authentication');

// routers
const authRouter = require('./routes/auth');
const jobsRouter = require('./routes/jobs');

// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');



//===================================================================================

//----------------- INVOKE --------------------------------

app.set('trust proxy', 1) //based on ref doc page
app.use(rateLimiter({windowMS: 16 * 60*1000, max: 100}));
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());


//----------------  ROUTES---------------------------------------------

//Test route to root level
app.get('/', (req, res) => {
  res.send('<h1>JOBS API</h1><a href="/api-docs">Documentation</a>');
});

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

// Two Main API Routes
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', authenticateUser, jobsRouter)

//Middleware

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
