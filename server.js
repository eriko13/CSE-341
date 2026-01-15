const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');
const dotenv = require('dotenv');
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
app.use('/', indexRouter);
 
app.listen(port, () => {
  console.log(`App Started on PORT ${port}`);
});