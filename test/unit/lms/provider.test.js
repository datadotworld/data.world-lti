process.env.NODE_ENV = 'test';

const chai = require('chai');
chai.should();

const asPromised = require('chai-as-promised');
chai.use(asPromised);

const faker = require('faker');
const provider = require('../../../server/lms/provider');

const Registration = require('../../../es5/src/database/index').sequelize.models.Registration;

describe('Unit Tests for the lms/provider module', () => {

    it('lookUpConsumerSecret() should return a secret', (done) => {

        Registration.create({

            name: faker.name.findName(),
            email: faker.internet.email(),
            title: faker.name.jobTitle(),
            organization: faker.company.companyName(),
            consumerKey: faker.random.uuid(),
            sharedSecret: faker.random.uuid()

        }).then(registration => {

            let consumerKey = registration.get('consumerKey');
            let sharedSecret = registration.get('sharedSecret');

            provider.lookUpConsumerSecret(consumerKey).then(lookup => {

                let lookedUpSharedSecret = lookup[0].get('sharedSecret');
                lookedUpSharedSecret.should.equal(sharedSecret);

            });

        });

        done();

    });

    it('lookupConsumerSecret() should return [] with invalid key input', (done) => {

        provider.lookUpConsumerSecret('invalid-key').then(lookup => {

            lookup.should.be.lengthOf(0);

        });

        done();

    });

});


