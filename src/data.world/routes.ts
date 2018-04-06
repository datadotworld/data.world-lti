import * as express from 'express';
import OAuth from './oauth';

export const router = express.Router();
const oauth = new OAuth();

router.get('/authorize', (request: express.Request, response: express.Response) => {

    response.redirect(oauth.mintInitialRedirectUri());

});

router.get('/authorize/callback', (request: express.Request, response: express.Response) => {

    oauth.requestAccessToken(request.query.code, response);

});