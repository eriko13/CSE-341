const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const indexRouter = require('./routes/index');
const dotenv = require('dotenv');
const passport = require('passport');
dotenv.config();

// Defines the body parser for the API
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Defines the Swagger API documentation route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Defines the router for the API
app.use('/', indexRouter);
 
// Starts the server
app.listen(port, () => {
  console.log(`App Started on PORT ${port}`);
});