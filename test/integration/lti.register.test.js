process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../../index');

describe('routes : lti', () => {

    it('should response with request', (done) => {

        chai.request(server)
            .post('/register', {})
            .end((error, response) => {

                should.not.exist(error);

                response.status.should.equal(200);

                done();

            });

    });

});