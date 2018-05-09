import * as Chai from 'chai';
import {expect} from 'chai';
import * as ChaiAsPromised from 'chai-as-promised';

Chai.use(ChaiAsPromised);

import * as Faker from 'faker';
const axios = require('axios');


import MockAdapter from 'axios-mock-adapter'

import OAuth from '../../../src/data.world/oauth';

describe('Unit Test(s) - data.world/OAuth Class', () => {

    it('appendUriParamsToBaseUri() should return unmodified base when not given params', (done) => {

        let oauth = new OAuth();

        let baseUri = Faker.internet.url();

        expect(oauth.appendUriParamsToBaseUri(baseUri)).to.equal(baseUri);

        done();

    });

    it('appendUriParamsToBaseUri() should append a ? between base and first parameter', (done) => {

        let oauth = new OAuth();
        let baseUri = Faker.internet.url();
        let params = {param: 'value'};

        expect(oauth.appendUriParamsToBaseUri(baseUri, params))
            .to.equal(`${baseUri}?param=value`);

        done();

    });

    it('appendUriParamsToBaseUri() should delimit parameter groups with &s', (done) => {

        let oauth = new OAuth();
        let baseUri = Faker.internet.url();
        let params = {param: 'value', param2: 'value', param3: 'value'};

        expect(oauth.appendUriParamsToBaseUri(baseUri, params))
            .to.equal(`${baseUri}?param=value&param2=value&param3=value`);

        done();

    });

    it('mintInitialRedirectUri() should return URI populated with default values', (done) => {

        let oauth = new OAuth();
        let expected = [

            oauth.baseInitialRedirectUri,
            '?client_id=default',
            '&redirect_uri=localhost',
            '&response_type=code'

        ].join('');


        expect(oauth.mintInitialRedirectUri()).to.equal(expected);

        done();

    });

    it('mintRequestAccessTokenUri() should return URI populated with default values', (done) => {

        let oauth = new OAuth();
        let code = Faker.internet.password(14);
        let expected = [

            oauth.baseRequestAccessTokenUri,
            '?client_id=default',
            '&client_secret=something-secret',
            `&code=${code}`,
            '&grant_type=authorization_code'

        ].join('');


        expect(oauth.mintRequestAccessTokenUri(code)).to.equal(expected);

        done();

    });

    it('requestAccessToken() should return URI populated with default values', (done) => {

        let oauth = new OAuth();
        let code = Faker.internet.password(14);

        let mockAdapter = new MockAdapter(axios);

        mockAdapter.onGet('/oauth/ddw/authorize/callback').reply(200, {

            data: { code: 'zac4ZV2XbleQ2e' }

        });

        mockAdapter.onPost(oauth.mintRequestAccessTokenUri('zac4ZV2XbleQ2e')).reply(200, {

            data: {access_token: 'ABC123', expires_in: 'the_future', refresh_token: 'refresh'}

        });

        axios.post('https://data.world/oauth/authorize').then((response: any) => {

            oauth.requestAccessToken(code, response);

            expect(response).to.not.be.empty;

            done();

        }).catch((error: any) => {

            done(error);

        });

    });

});
