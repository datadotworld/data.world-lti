import * as express from 'express';
import AuthTokens from '../middleware/auth-tokens';

export const router = express.Router();

router.use(AuthTokens.datadotworld());

router.all("*", (request: express.Request, response: express.Response) => {

    response.render('index', {title: 'data.world LTI'});

});