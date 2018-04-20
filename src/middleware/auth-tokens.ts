import * as express from 'express';
import * as url from 'url';

export default class AuthTokens {

    public static datadotworld() {

        return (request: express.Request, response: express.Response, next: express.NextFunction) => {

            if (typeof request.query.token === "string") {

                response.cookie('ddw_token', request.query.token);

                let redirectUri = url.parse(request.url).pathname;

                response.redirect(redirectUri);

            } else {

                next();

            }

        }

    }


}