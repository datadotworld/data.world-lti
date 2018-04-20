import * as express from 'express';
import * as url from 'url';
export const router = express.Router();

router.get('/config', (request: express.Request, response: express.Response) => {

    let hostUrl = url.format({

        protocol: request.protocol,
        host: request.get('host'),
        pathname: request.originalUrl

    });

    response.set('Content-Type', 'text/xml');

    response.render('config', {

        "launch_url": hostUrl + "/lti/launch",
        "title": "data.world",
        "description": "Provides users access to their data.world resources.",
        "extensions": [
            {
                "platform": "canvas.instructure.com",
                "tool_id": "course_navigation",
                "privacy_level": "public",
                "course_navigation": {
                    "host_url": hostUrl,
                    "default": "enabled",
                    "visibility": "members",
                    "enabled": "true",
                    "text": "data.world"


                }
            }
        ]

    });

});

// const crud = require('./controllers');
// const provider = require('./provider');

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