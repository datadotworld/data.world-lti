import * as express from 'express';

/**
 * A router object for handling authentication requests to /login
 *
 * @type {express.Router}
 */
export const router = express.Router();

router.get('/login', (request: express.Request, response: express.Response) => {

    response.redirect('/oauth/ddw/authorize');

});