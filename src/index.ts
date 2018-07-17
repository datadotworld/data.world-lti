import * as http from 'http';
import * as express from 'express';
import App from './app';

/**
 * A class for orchastrating of the HTTP server to be used by the express.Application.
 *
 * @class Bootstrapper
 */
class Bootstrapper {

    /**
     * The express.Application to be modified.
     *
     * @type {express.Application}
     */
    private readonly application: express.Application;

    /**
     * The port on which the HTTP server will listen.
     *
     * @type {number|string|boolean}
     */
    private readonly port: number|string|boolean;

    /**
     * The HTTP server instance for handling traffic for the express.Application instance.
     *
     * @type {http.Server}
     */
    private readonly server: http.Server;

    /**
     * Bootstrapper class constructor.
     */
    constructor() {

        this.port = this.normalizePort(process.env.PORT || 3000);

        this.application = new App().express;
        this.application.set('port', this.port);

        if (!module.parent) {


            this.application.listen(this.port);

        }

        this.server = http.createServer(this.application)
            .on('error', this.onError)
            .on('listening', this.onListening);

    }

    /**
     * Getter method that returns the express.Application instance.
     *
     * @return {express.Application}
     */
    public getApp(): express.Application {

        return this.application;

    }

    /**
     * Getter method that returns the http.Server instance.
     *
     * @return {http.Server}
     */
    public getServer(): http.Server {

        return this.server;

    }

    /**
     * Returns a normalized port to be ingested by the HTTP server instance.
     *
     * @param {number | string} val
     *
     * @return {number | string | boolean}
     */
    private normalizePort(val: number|string): number|string|boolean {

        let port: number = (typeof val === 'string') ? parseInt(val, 10) : val;
        if (isNaN(port)) return val;
        else if (port >= 0) return port;
        else return false;

    }

    /**
     * Callback method for the http.Server instance onError event.
     *
     * @param {NodeJS.ErrnoException} error
     */
    private onError(error: NodeJS.ErrnoException): void {

        if (error.syscall !== 'listen') throw error;
        let bind = (typeof this.port === 'string') ? 'Pipe ' + this.port : 'Port ' + this.port;
        switch(error.code) {
            case 'EACCES':
                console.error(`${bind} requires elevated privileges`);
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error(`${bind} is already in use`);
                process.exit(1);
                break;
            default:
                throw error;

        }
    }

    /**
     * Callback method for the http.Server instance onListening event.
     *
     * @param {NodeJS.ErrnoException} error
     */
    private onListening(): void {

        let addr = this.server.address();
        let bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
        console.log(`Listening on ${bind}`);

    }

}

const bootstrap = new Bootstrapper();

module.exports = bootstrap.getApp();
module.exports.server = bootstrap.getServer();