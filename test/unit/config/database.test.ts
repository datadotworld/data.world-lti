import {expect} from 'chai';

import DatabaseConfig from '../../../src/server/config/database';

describe('Unit Test(s) - config/DatabaseConfig Class', () => {

    it('should return the default database values', (done) => {

        let config = new DatabaseConfig();

        expect(config.getKeyValue('dialect')).to.equal('postgres');
        expect(config.getKeyValue('host')).to.equal('localhost');
        expect(config.getKeyValue('database')).to.equal('postgres');
        expect(config.getKeyValue('username')).to.equal('postgres');
        expect(config.getKeyValue('port')).to.be.eql('5432');

        done();

    });

});


