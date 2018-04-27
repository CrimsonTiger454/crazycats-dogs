const express = require('express');
const bodyParser = require('body-parser');
const infoController = require('./controllers/DoggyInfo');
const port = 4200;

const app = express();

app.use(bodyParser.json());

app.get('/api/doggos/newDog', infoController.getDoggo);

app.delete('/api/doggos/:id', infoController.removeDoggo);

app.listen(port, () => console.log(`Peepin on port ${port}....`) );