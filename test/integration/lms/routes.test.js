process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = require('chai').should();
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const faker = require('faker');

const app = require('../../../server/index');

describe('HTTP Tests for lms/routes "/lti/config"', () => {

    it('should response with a configuration xml document', (done) => {

        chai.request(app)
            .post('/lti/config', done)
            .end((error, response) => {

                should.not.exist(error);

                response.status.should.equal(200);
                response.type.should.equal('text/xml');

                done();

            });

    });

});

describe('HTTP Tests for lms/routes "/lti/launch"', () => {

    it('should response with a 200', (done) => {

        chai.request(app)
            .post('/lti/launch', done)
            .end((error, response) => {

                should.not.exist(error);

                response.status.should.equal(200);

                done();

            });

    });

});

describe('HTTP Tests for lms/routes "/lti/register"', () => {

    it('should response with a 201', (done) => {

        let mock = {

            name: faker.name.findName(),
            email: faker.internet.email(),
            organization: faker.company.companyName(),
            title: faker.name.jobTitle()

        };

        chai.request(app)
            .post('/lti/register', done)
            .send(mock)
            .end((error, response) => {

                response.status.should.equal(201);

                done();

            });

    });

    it('should response with a 403 due to bad input', (done) => {

        let mock = {

            name: faker.name.findName(),
            email: faker.internet.email(),
            title: faker.name.jobTitle()

        };

        chai.request(app)
            .post('/lti/register', done)
            .send(mock)
            .end((error, response) => {

                response.status.should.equal(400);

                done();

            });

    });

});