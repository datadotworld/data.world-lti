import {expect} from 'chai';

const SecretGenerator = require('../../../src/server/lms/secrets');


describe('Unit Test(s) - lms/SecretGenerator Class', () => {

    it('secrets.generateKey() should return a 32 character string', (done) => {

        expect(SecretGenerator.generateKey()).to.have.lengthOf(32);

        done();

    });

});