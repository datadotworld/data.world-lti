import * as chai from 'chai';
import { expect } from 'chai';
import chaiHttp = require('chai-http');

import * as server from '../src/index';
chai.use(chaiHttp);

describe('Unit Test(s) - routers/authentication module', () => {

    it('GET /login should redirect to OAuth routes', () => {

        return chai.request(server).get('/login').then((response) => {

            expect(response).to.redirect;

        });

    });

});

describe('Unit Tests(s) - routers/client module', () => {

   it('ANY /* should return an HTML response, i.e. the React client application', () => {

      return chai.request(server).get('/').then((response) => {

          expect(response).to.have.header('content-type', 'text/html; charset=utf-8');

       });

   });

});

describe('Unit Tests(s) - routers/data.world module', () => {

    it('ANY /oath/ddw/authorize should redirect', () => {

        return chai.request(server).get('/oauth/ddw/authorize').then((response) => {

            expect(response).to.redirect;

        });

    });

    it('ANY /oath/ddw/authorize should redirect', () => {

        return chai.request(server).get('/oauth/ddw/authorize/callback').then((response) => {

            expect(response).to.redirect;

        });

    });

});

describe('Unit Tests(s) - routers/lti module', () => {

    it('GET /lit/config should return an xml response', () => {

        return chai.request(server).get('/lti/config').then((response) => {

            expect(response).to.have.header('content-type', 'text/xml; charset=utf-8');

        });

    });

    it('POST /lti/config with query params should return xml response', () => {

        return chai.request(server).post('/lti/config?param1=value1').then((response) => {

            expect(response).to.have.header('content-type', 'text/xml; charset=utf-8');

        });

    });

    it('POST /lti/launch should return an html response', () => {

        return chai.request(server).post('/lti/launch').then((response) => {

            expect(response).to.have.header('content-type', 'text/html; charset=utf-8');

        });

    });

    it('POST /lti/launch with JSON body should return an html response', () => {

        return chai.request(server)
            .post('/lti/launch')
            .type('json')
            .send({param: "value"})
            .then((response) => {

            expect(response).to.have.header('content-type', 'text/html; charset=utf-8');

        });

    });

});