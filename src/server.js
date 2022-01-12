'use strict';

const logger = require('./middleware/logger');
const validator = require('./middleware/validator');

const notFound = require('./error-handlers/404');
const serverError = require('./error-handlers/500');

const express = require('express');
const app = express();

//-------------------------- Middleware --------------------------

app.use(express.json()); // Turn a JSON String into valid JSON
app.use(logger); //Console log the method and path


//-------------------------- Routes --------------------------

app.get('/', (req, res, next) => {
  res.send('hittin\' the home route');
});

app.post('/person', validator, (req, res, next) => {
  res.status(200).send({name: req.query.name});
});

// -------------------------- Error Handling --------------------------
app.use(serverError);
app.use(notFound);




module.exports = {
  start: (port) => {
    app.listen(port, () => console.log('listening on: ', port));
  },
  app,
};