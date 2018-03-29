import * as express from 'express';
import * as bodyParser from 'body-parser';

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
        // this.express.set('view engine', 'pug');
        // this.express.set('views', ['../client/views', './lms/views']);
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

    }

    /**
     * A method for orchastrating the routes for the express.Application instance.
     *
     * @return void
     */
    private routes(): void {

        let router = express.Router();

        router.get('/', (request, response) => {

          response.send('Hello World!');

        });

        this.express.use('/', router);

    }

}