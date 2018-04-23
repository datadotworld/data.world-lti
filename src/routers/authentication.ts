import * as express from 'express';

export const router = express.Router();

router.get('/login', (request: express.Request, response: express.Response) => {

    response.redirect('/oauth/ddw/authorize');

});