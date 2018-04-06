import {expect} from 'chai';
import * as path from 'path';

import engine from '../../../src/views/mustache-engine';

describe('Unit Test(s) - views/mustache-engine module', () => {

    it('engine() should return something', (done) => {

        let mustachePath = path.join(__dirname, './test.mustache');

        let result = engine(mustachePath, '',{value: "test"});

        expect(result).to.not.be.empty;

        done();

    });

});