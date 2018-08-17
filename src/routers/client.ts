import * as express from 'express';


/**
 * A router object for handling requests for the client React application.
 *
 * @type {express.Router}
 */
export const router = express.Router();

router.all("*", (request: express.Request, response: express.Response) => {

    response.render('index', {

        title: 'data.world LTI',
        configProtocol: (process.env.DDW_LTI_SECURE === "false") ? 'http' : "https",
        configHost: process.env.DDW_LTI_CONFIGURATION_HOST || 'example.com'

    });

});