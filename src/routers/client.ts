import * as express from 'express';

export const router = express.Router();

router.all("*", (request: express.Request, response: express.Response) => {

    response.render('index', {title: 'data.world LTI'});

});