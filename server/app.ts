import * as express from 'express';
import * as bodyParser from 'body-parser';

import Errorware from './middleware/error';

/**
 * A wrapper class for managing an express.Application instance.
 *
 * @class App
 */
export default class App {

    /**
     * The express.Application to be modified.
     *
     * @type {express.Application}
     */
    public express: express.Application;

    /**
     * App class constructor.
     */
    constructor() {

        this.express = express();
        this.middleware();
        this.routes();

    }

    /**
     * A method for orchastrating the middleware for the express.Application instance.
     *
     * @return void
     */
    private middleware(): void {

        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));

        Errorware.basic(this.express);

    }

    /**
     * A method for orchastrating the routes for the express.Application instance.
     *
     * @return void
     */
    private routes(): void {

        let router = express.Router();

        this.express.use('/', router);

    }

}