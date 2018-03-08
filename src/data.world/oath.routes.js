const express = require('express');
const router = express.Router();

router.get('/config', (request, response) => {

    response.type('text/xml').render('config');

});

router.get('/launch', (request, response) => {

    let body = request.body;

    response.json(body);

});

module.exports = router;