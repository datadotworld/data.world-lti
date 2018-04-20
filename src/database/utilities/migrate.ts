import {Promise} from 'bluebird';
import {Sequelize} from 'sequelize-typescript';
import * as Umzug from 'umzug';

import DatabaseConfig from '../../config/database';

import {fallback} from './commands/fallback';
import {status} from './commands/status';
import {migrate , next} from './commands/migrate';
import {reset, previous} from './commands/reset';


const config = new DatabaseConfig();
const sequelizeOptions = config.getIndex() as any;
const sequelize = new Sequelize(sequelizeOptions);

const umzug = new Umzug({

    storage: 'sequelize',
    storageOptions: {
        sequelize: sequelize
    },
    migrations: {
        params: [
            sequelize.getQueryInterface(),
            sequelize.constructor,
            () => {
                throw new Error('Migration tried to use old style "done" callback.');
            }
        ],
        path: './src/database/migrations',
        pattern: /\.js$/
    },
    logging: function() {

        console.log.apply(null, arguments);

    }

});

function logUmzugEvent(eventName: string) {

    return function(name: string, migration: any) {

        console.log(`${ name } ${ eventName }`);

    }

}

umzug.on('migrating', logUmzugEvent('migrating'));
umzug.on('migrated',  logUmzugEvent('migrated'));
umzug.on('reverting', logUmzugEvent('reverting'));
umzug.on('reverted',  logUmzugEvent('reverted'));


const cmd = process.argv[2].trim();

console.log(`${ cmd.toUpperCase() } BEGIN`);

let commandToExecute;

switch(cmd) {

    case 'status':
        commandToExecute = status(umzug);
        break;

    case 'up':
    case 'migrate':
        commandToExecute = migrate(umzug);
        break;

    case 'next':
    case 'migrate-next':
        commandToExecute = next(umzug);
        break;

    case 'down':
    case 'reset':
        commandToExecute = reset(umzug);
        break;

    case 'prev':
    case 'reset-prev':
        commandToExecute = previous(umzug);
        break;

    default:
        commandToExecute = fallback(cmd);

}

commandToExecute
    .then((result) => {

        console.log(`${ cmd.toUpperCase() } DONE`);

    })
    .catch(err => {

        console.log(`${ cmd.toUpperCase() } ERROR`);
        process.exit(1);

    })
    .then(() => {

        if (cmd !== 'status' && cmd !== 'rest-hard') {

            return status(umzug);

        }

        return Promise.resolve();

    })
    .then(() => process.exit(0));