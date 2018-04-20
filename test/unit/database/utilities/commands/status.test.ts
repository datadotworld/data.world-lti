import * as path from 'path';

import * as Chai from 'chai';
import {expect} from 'chai';
import * as ChaiAsPromised from 'chai-as-promised';

Chai.use(ChaiAsPromised);

import * as Umzug from 'umzug';
import {Sequelize} from 'sequelize-typescript';

import {status} from "../../../../../src/database/utilities/commands/status";

const sqliteDbPath = path.join(process.cwd(), 'src/storage/database.sqlite');
const sequelize = new Sequelize('sqlite:' + sqliteDbPath);
const umzug = new Umzug({

    storage: "sequelize",
    storageOptions: {
        sequelize: sequelize
    },
    migrations: {
        params: [
            sequelize.getQueryInterface(),
            sequelize.constructor,
            function() {
                throw new Error('Migration tried to use old style "done" callback.')
            }
        ],
        path: path.join(process.cwd(), 'src/database/migrations'),
        pattern: /\.js$/
    }

});


describe('Unit Test(s) - database/utilities/commands/status', () => {

    it('expect status() to return Promise', (done) => {

        expect(status(umzug)).to.be.fulfilled;

        done();

    });

});
