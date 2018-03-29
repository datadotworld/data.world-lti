import {Sequelize} from 'sequelize-typescript';
import DatabaseConfig from '../config/database';

let config = new DatabaseConfig();
config.setKeyValue('modelPaths', [

    __dirname + '/models'

]);

let options = config.getIndex() as any;

export const sequelize = new Sequelize(options);