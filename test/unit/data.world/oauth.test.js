import { expect } from 'chai';
import 'chai-as-promised';
import { internet } from 'faker';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import OAuth from '../../../server/data.world/oauth';

describe('Unit Tests for the appendUriParamsToBaseUri() data.world/OAuth Class method', () => {

    it('should return unmodified base when not given params', (done) => {

        let oauth = new OAuth();

        let baseUri = internet.url();

        expect(oauth.appendUriParamsToBaseUri(baseUri)).to.equal(baseUri);

        done();

    });

    it('should append a ? between base and first parameter', (done) => {

        let oauth = new OAuth();
        let baseUri = internet.url();
        let params = {param: 'value'};

        expect(oauth.appendUriParamsToBaseUri(baseUri, params))
            .to.equal(`${baseUri}?param=value`);

        done();

    });

    it('should delimit parameter groups with &s', (done) => {

        let oauth = new OAuth();
        let baseUri = internet.url();
        let params = {param: 'value', param2: 'value', param3: 'value'};

        expect(oauth.appendUriParamsToBaseUri(baseUri, params))
            .to.equal(`${baseUri}?param=value&param2=value&param3=value`);

        done();

    });

});

describe('Unit Tests for the mintInitialRedirectUri() data.world/OAuth Class method', () => {

    it('should return URI populated with default values', (done) => {

        let oauth = new OAuth();
        let expected = [

            oauth.baseInitialRedirectUri,
            '?client_id=null',
            '&redirect_uri=localhost',
            '&response_type=code'

        ].join('');


        expect(oauth.mintInitialRedirectUri()).to.equal(expected);

        done();

    });

});

describe('Unit Tests for the mintRequestAccessTokenUri() data.world/OAuth Class method', () => {

    it('should return URI populated with default values', (done) => {

        let oauth = new OAuth();
        let code = internet.password(14);
        let expected = [

            oauth.baseRequestAccessTokenUri,
            '?client_id=null',
            '&client_secret=something-secret',
            `&code=${code}`,
            '&grant_type=authorization_code'

        ].join('');


        expect(oauth.mintRequestAccessTokenUri(code)).to.equal(expected);

        done();

    });

});

describe('Unit Tests for the requestAccessToken() data.world/OAuth Class method', () => {

    it('should return URI populated with default values', (done) => {

        let oauth = new OAuth();
        let code = internet.password(14);

        let mockAdapter = new MockAdapter(axios);

        mockAdapter.onAny().reply(200, {

            data: {}

        });

        oauth.requestAccessToken(code).then((response) => {

            done();

        });

    });

});