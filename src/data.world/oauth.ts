const config = require('../config/data.world');
import axios, { AxiosResponse, AxiosError } from 'axios';
import * as express from 'express';

//oauth/ddw/access_token/callback

/**
 * @class OAuth
 */
export default class OAuth {

    /**
     * The base URI for the initial redirect of the OAuth process.
     *
     * @type {String}
     */
    baseInitialRedirectUri: string;

    /**
     * The base URI for requesting an access token.
     *
     * @type {String}
     */
    baseRequestAccessTokenUri: string;

    /**
     * Constructs an instance of the data.world/OAuth class.
     */
    constructor() {

        this.baseInitialRedirectUri = 'https://data.world/oauth/authorize';
        this.baseRequestAccessTokenUri = 'https://data.world/oauth/access_token';

    }

    /**
     * Returns a well formed URI derived from the given base URI and given query parameters.
     *
     * @param {String} base
     * @param {Object} params
     *
     * @returns {String}
     */
    appendUriParamsToBaseUri(base: string, params: any={}) {

        Object.keys(params).forEach((param, index) => {

            let specialChar = (index < 1) ? '?' : '&';

            let value = params[param];

            base = `${base}${specialChar}${param}=${value}`;

        });

        return base;

    }

    /**
     * Creates and returns a well formed initial redirect URI with the configured query parameters.
     *
     * @param {String|null} state
     *
     * @return {String}
     */
    mintInitialRedirectUri(state: string=null) {

        let params = {

            'client_id': config['client_id'],
            'redirect_uri': config['redirect_uri'],
            'response_type': config['response_type']

        } as any;

        if (state) {

            params['state'] = state;

        }

        return this.appendUriParamsToBaseUri(this.baseInitialRedirectUri, params);

    }

    /**
     * Creates and returns a well formed URI for requesting an access token.
     *
     * @param {String} code
     * @param {String|null} redirectUri
     *
     * @return {String}
     */
    mintRequestAccessTokenUri(code: string, redirectUri: string=null) {

        let params = {

            'client_id': config['client_id'],
            'client_secret': config['client_secret'],
            'code': code,
            'grant_type': 'authorization_code'

        } as any;

        if (redirectUri) {

            params['redirect_uri'] = redirectUri;

        }

        return this.appendUriParamsToBaseUri(this.baseRequestAccessTokenUri, params);

    }

    /**
     * Makes an HTTP request for an Access Token and returns the result.
     *
     * @param {String} code
     * @param {express.Response} response
     * @param {String|null} redirectUri
     *
     * @return {Promise}
     */
    requestAccessToken(code: string, response: express.Response, redirectUri: string=null) {

        axios.post(this.mintRequestAccessTokenUri(code, redirectUri)).then((tokenResponse: AxiosResponse) => {

            if (tokenResponse.data.access_token) {

                let tokenUrl = this.appendUriParamsToBaseUri(

                    config['connector_uri'],
                    {"token": tokenResponse.data.access_token}

                );

                response.redirect(tokenUrl);

            } else {

                let errorMessage = tokenResponse.data.message || 'UNKNOWN_ERROR';

                let errorUrl = this.appendUriParamsToBaseUri(

                    config['connector_uri'],
                    {"error": errorMessage}

                );

                response.redirect(errorUrl);

            }

        }).catch((error: AxiosError) => {

            let errorMessage = error.message || 'UNKNOWN_ERROR';

            let errorUrl = this.appendUriParamsToBaseUri(

                config['connector_uri'],
                {"error": errorMessage}

            );

            response.redirect(errorUrl);

        });

    }

};