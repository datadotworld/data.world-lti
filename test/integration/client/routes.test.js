process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = require('chai').should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const app = require('../../../server/index');

describe('HTTP Tests for client/routes "/"', () => {

    it('should response with a 200', (done) => {

        chai.request(app)
            .get('/', done)
            .end((error, response) => {

                should.not.exist(error, "Have the frontend resources been compiled?");

                response.status.should.equal(200);
                response.type.should.equal('text/html');

                done();

            });

    });

});

describe('HTTP Tests for client/routes "/register"', () => {

    it('should response with a 200', (done) => {

        chai.request(app)
            .get('/', done)
            .end((error, response) => {

                should.not.exist(error, "Have the frontend resources been compiled?");

                response.status.should.equal(200);
                response.type.should.equal('text/html');

                done();

            });

    });

});

describe('HTTP Tests for client/routes "/*"', () => {

    it('should response with the client/public/index.html file for all unnamed routes', (done) => {

        let named = ['/lti/config','/lti/launch', '/lti/register'];
        let unnamed = ['', '/cow', '/chicken', '/free-passwords', '/health'];

        named.forEach((item) => {

            chai.request(app)
                .get(item, done)
                .end((error, response) => {

                    should.not.exist(error, "Have the frontend resources been compiled?");

                    response.type.should.not.equal('text/html');

                });

        });

        unnamed.forEach((item) => {

            chai.request(app)
                .get(item, done)
                .end((error, response) => {

                    should.not.exist(error, "Have the frontend resources been compiled?");

                    response.type.should.equal('text/html');

                });

        });

        done();

    });

});