process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = require('chai').should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const db = require('../../../src/database');

describe('Tests for a database connection', () => {

   it('should not throw exception', (done) => {

       let error;

       db.sequelize.authenticate()
          .catch(err => {

              error = err;

          });

       should.not.exist(error);

       done();


   });

});
