const chai = require('chai');

const secrets = require('../../../src/lms/secrets');

describe('Unit Tests for the lms/secrets module', () => {

    it('secrets.generateKey() should return a 32 character string', (done) => {

        let should = chai.should();
        let actual = secrets.generateKey();

        actual.should.have.lengthOf(32);

        done();

    });

});


