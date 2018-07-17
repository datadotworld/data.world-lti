import * as express from 'express';
import * as url from 'url';

/**
 * A router object for handling requests from an LTI compliant LMS.
 *
 * @type {express.Router}
 */
export const router = express.Router();

router.all('/config', (request: express.Request, response: express.Response) => {

    let launchUrl = url.format({

        protocol: (process.env.NODE_ENV === "production") ? 'https' : request.protocol,
        host: request.get('host'),
        pathname: "/lti/launch"

    });

    response.set('Content-Type', 'text/xml');

    response.render('config', {

        "launch_url": launchUrl,
        "title": "data.world",
        "description": "Provides users access to their data.world resources.",
        "extensions": [
            {
                "platform": "canvas.instructure.com",
                "tool_id": "course_navigation",
                "privacy_level": "public",
                "course_navigation": {
                    "default": "enabled",
                    "visibility": "members",
                    "enabled": "true",
                    "text": "data.world"


                }
            }
        ]

    });

});

router.all('/launch', (request: express.Request, response: express.Response) => {

    response.render('widget', {clientId: process.env.DDW_CLIENT_ID});

});