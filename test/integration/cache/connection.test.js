process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const redis = require('../../../server/config/redis');

describe('Tests for a valid redis connection', () => {

    it('redis.ping() should return true', (done) => {

        redis.ping().should.be.eq(true);

        done();

    });

});