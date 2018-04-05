import {expect} from 'chai';
import * as path from 'path';

import engine from '../../../src/server/views/mustache-engine';

const callback = (error: NodeJS.ErrnoException, content: string) => {

    expect(content).to.not.be.empty;

};

describe('Unit Test(s) - views/mustache-engine module', () => {

    it('engine() should return something', (done) => {

        let mustachePath = path.join(__dirname, './test.mustache');

        let result = engine(mustachePath, {value: "test"}, callback);

        done();

    });

});