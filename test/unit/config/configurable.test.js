"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var configurable_1 = require("src/server/config/configurable");
describe('Unit Test(s) - config/Configurable Class', function () {
    it('setKeyValue() should update the internal index', function (done) {
        var config = new configurable_1.Configurable();
        config.setKeyValue('test', 'this is only a test');
        var index = config.getIndex();
        chai_1.expect(index['test']).to.be.equal('this is only a test');
        done();
    });
    it('getKeyValue() should return the set value when trying to access a valid key.', function (done) {
        var config = new configurable_1.Configurable();
        config.setKeyValue('test', 'this is only a test');
        chai_1.expect(config.getKeyValue('test')).to.be.equal('this is only a test');
        done();
    });
    it('setKeyValue() should not case input to string', function (done) {
        var config = new configurable_1.Configurable();
        config.setKeyValue('test', 1000);
        chai_1.expect(config.getKeyValue('test')).to.be.equal(1000);
        done();
    });
    it('getKeyValue() should return undefined when trying to access an invalid key', function (done) {
        var config = new configurable_1.Configurable();
        chai_1.expect(config.getKeyValue('test')).to.be.undefined;
        done();
    });
});
