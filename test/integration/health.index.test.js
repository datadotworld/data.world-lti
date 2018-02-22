process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../../server');

describe('routes : health', () => {

   it('should response with "0K"', (done) => {

      chai.request(server)
          .get('/health')
          .end((error, response) => {

              should.not.exist(error);

              response.status.should.equal(200);

              done();

          });

   });

});