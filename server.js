const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');
const dotenv = require('dotenv');
dotenv.config();

// Defines the body parser for the API
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Defines the router for the API
app.use('/', indexRouter);
 
// Starts the server
app.listen(port, () => {
  console.log(`App Started on PORT ${port}`);
});