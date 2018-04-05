import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as url from 'url';

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

        this.express.set('views', "./views");
        this.express.set('view engine', 'mustache');

        this.express.use(express.static('./public'));
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

        const router = express.Router();

        require('./views/index.mustache');
        require('./views/config.mustache');


        router.get('/', (request, response) => {

            response.render('index', {title: 'data.world LTI'});

        });

        router.get('/lti/config', (request, response) => {

            let hostUrl = url.format({

                protocol: request.protocol,
                host: request.get('host'),
                pathname: request.originalUrl

            });

            response.set('Content-Type', 'text/xml');

            response.render('config',{

                "launch_url": hostUrl + "/lti/launch",
                "title": "data.world",
                "description": "Provides users access to their data.world resources.",
                "extensions": [
                    {
                        "platform": "canvas.instructure.com",
                        "tool_id": "course_navigation",
                        "privacy_level": "public",
                        "course_navigation": {
                            "host_url": hostUrl,
                            "default": "enabled",
                            "visibility": "members",
                            "enabled": "true",
                            "text": "data.world"


                        }
                    }
                ]

            });

        });

        this.express.use('/', router);

    }

}