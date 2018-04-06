const express = require('express');
const router = express.Router();

const crud = require('./controllers');
const provider = require('./provider');

// router.post('/config', (request, response) => {
//
//     provider.lookUpConsumerSecret(request.body.oauth_consumer_key)
//         .then(lookedUp => {
//
//             let registration = lookedUp[0];
//
//             let lti = provider.initialize(
//
//                 registration.get('consumerKey'),
//                 registration.get('sharedSecret')
//
//             );
//
//             lti.valid_request(request, (error, valid) => {
//
//                 if (!valid) {
//                     response.status(400).json(error);
//                 } else {
//                     response.type('text/xml').render('config');
//                 }
//
//             });
//
//         });
//
//
//
// });
//
// router.post('/launch', (request, response) => {
//
//
//     response.json({});
//
// });

// router.post('/register', (request, response) => {
//
//     crud.register(
//
//         request.body.name,
//         request.body.email,
//         request.body.organization,
//         request.body.title
//
//     ).then(registration => {
//
//         response.status(201).json(registration);
//
//     }).catch(error => {
//
//         response.status(400).json(error);
//
//     });
//
//
//
// });

module.exports = router;