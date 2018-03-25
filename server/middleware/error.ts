import * as express from 'express';

export default class Errorware {

    public static basic(app: express.Application): void {

        app.use((error: Error, request: express.Request, response: express.Response) => {

            response.status(500).send({

                message: error.message,
                error: {}

            });

        });

    }


}