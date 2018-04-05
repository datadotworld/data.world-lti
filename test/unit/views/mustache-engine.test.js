"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var path = require("path");
var engine = require('src/server/views/mustache-engine');
describe('Unit Test(s) - views/mustache-engine module', function () {
    it('secrets.generateKey() should return a 32 character string', function (done) {
        var mustachePath = path.join(__dirname, './test.mustache');
        chai_1.expect(engine(mustachePath, { value: "test" })).to.not.be.empty;
    });
});
