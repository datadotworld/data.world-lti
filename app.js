const express = require('express');
const app = express();

require('./config')(app, express);

module.exports = app;