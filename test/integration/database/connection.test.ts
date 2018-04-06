import {sequelize} from '../../../src/database';

describe('Integration Test(s) - Database', () => {

    it('sequelize should be able to authenticate', (done) => {

        process.env['DATABASE_DIALECT'] = 'postgres';
        process.env['DATABASE_HOST'] = 'localhost';
        process.env['DATABASE_NAME'] = 'postgres';
        process.env['DATABASE_PASSWORD'] = 'something-secret';
        process.env['DATABASE_PORT'] = '5432';

        sequelize.authenticate().then(() => {

            done();

        }).catch((error) => {

            done(error);

        });

    });

});


