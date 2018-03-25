const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {

    response.type('text/html').render('index');

});

router.get('/register', (request, response) => {

    response.type('text/html').render('index');

});

router.post('/register', (request, response) => {

   response.json({sharedSecret: '', consumerKey: ''});

});

module.exports = router;