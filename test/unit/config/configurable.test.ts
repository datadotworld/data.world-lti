import {expect} from 'chai';
import {Configurable} from 'src/server/config/configurable';

describe('Unit Test(s) - config/Configurable Class', () => {

    it('setKeyValue() should update the internal index', (done) => {

        let config = new Configurable();

        config.setKeyValue('test', 'this is only a test');

        let index = config.getIndex();

        expect(index['test']).to.be.equal('this is only a test');

        done();

    });

    it('getKeyValue() should return the set value when trying to access a valid key.', (done) => {

        let config = new Configurable();

        config.setKeyValue('test', 'this is only a test');

        expect(config.getKeyValue('test')).to.be.equal('this is only a test');

        done();

    });

    it('setKeyValue() should not case input to string', (done) => {

        let config = new Configurable();

        config.setKeyValue('test', 1000);

        expect(config.getKeyValue('test')).to.be.equal(1000);

        done();


    });

    it('getKeyValue() should return undefined when trying to access an invalid key', (done) => {

        let config = new Configurable();

        expect(config.getKeyValue('test')).to.be.undefined;

        done();

    });

});