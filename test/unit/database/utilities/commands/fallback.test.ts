import * as Chai from 'chai';
import {expect} from 'chai';
import * as ChaiAsPromised from 'chai-as-promised';

Chai.use(ChaiAsPromised);

import {fallback} from "../../../../../src/database/utilities/commands/fallback";


describe('Unit Test(s) - database/utilities/commands/fallback', () => {

    it('expect fallback() to return Promise', (done) => {

        expect(fallback('mock-command')).to.be.fulfilled;

        done();

    });

});
