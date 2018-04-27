const express = require('express');
const bodyParser = require('body-parser');
const infoController = require('./controllers/DoggyInfo');
const port = 4200;

const app = express();

app.use(bodyParser.json());

app.get('/api/doggos/name', infoController.getNameAndID);

app.listen(port, () => console.log(`Peepin on port ${port}....`) );