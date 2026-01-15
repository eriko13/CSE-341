const express = require('express');

const bodyParser = require('body-parser');
const router = express.Router();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
router.get('/', (req, res) => {
  console.log('GET /');
  res.send('Ok');
});
 
app.use('/', router);
 
app.listen(process.env.PORT || 8080, () => {
  console.log(`App Started on PORT ${process.env.PORT || 8080}`);
});