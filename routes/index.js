const express = require('express');
const router = express.Router();

const health = require('./health/index');
const lti = require('./lti/index');

module.exports = router;