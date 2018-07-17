import * as express from 'express';

/**
 * A router object for handling requests for the data.world OAuth handshake.
 *
 * @type {express.Router}
 */
export const router = express.Router();

router.all(['/authorize', '/authorize/callback'], (request: express.Request, response: express.Response) => {

    response.redirect('/');

});