import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import * as path from 'path';

const engine = require('mustache-express');

import { router as clientRouter } from './client/routes';
import { router as ddwRouter } from './data.world/routes';
import { router as ltiRouter } from './lms/routes';

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

        this.express.engine('mustache', engine());
        this.express.set('view engine', 'mustache');
        this.express.set('views', path.resolve(__dirname, 'views'));

        this.express.use(express.static('public'));
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
        this.express.use(cookieParser());

    }

    /**
     * A method for orchastrating the routes for the express.Application instance.
     *
     * @return void
     */
    private routes(): void {


        this.express.use('/lti', ltiRouter);
        this.express.use('/oauth/ddw', ddwRouter);

        this.express.use('*', clientRouter);

    }

}