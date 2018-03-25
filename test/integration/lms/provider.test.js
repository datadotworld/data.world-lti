process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = require('chai').should();
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const faker = require('faker');
const redis = require('../../../server/config/redis');
const lti = require('ims-lti');
const RedisStore = require('ims-lti').Stores.RedisStore;

describe('Tests that an LTI provider can be initialized', () => {

    it('', (done) => {

        let consumer_key = faker.random.uuid();
        let consumer_secret = faker.random.uuid();

        const provider = lti.Provider(consumer_key, consumer_secret);

        const valid = provider.is

        done();

    });

});

