process.env.NODE_ENV = 'test';

const chai = require('chai');
chai.should();

const asPromised = require('chai-as-promised');
chai.use(asPromised);

const faker = require('faker');

const controllers = require('../../../src/lms/controllers');

describe('Unit Tests for the lms/controllers module', () => {

    it('should return a populated Registration model', (done) => {

        (async () => {

            await controllers.register(

                faker.name.findName(),
                faker.internet.email(),
                faker.company.companyName(),
                faker.name.jobTitle()

            );

        }).should.not.Throw(Error);

        done();

    });

    it('should throw ValidationError', () => {


        let result = controllers.register(

            faker.name.findName(),
            null,
            faker.company.companyName(),
            faker.name.jobTitle()

        );

        return result.should.be.rejected;

    });

});