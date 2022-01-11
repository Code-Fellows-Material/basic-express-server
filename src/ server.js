'use strict';

const express = require('express');
const app = express();










module.exports = {
  start: (port) => {
    app.listen(port, () => console.log('listening on: ', port));
  },
  app,
};