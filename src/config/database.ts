import {Configurable} from './configurable';

export default class DatabaseConfig extends Configurable<string, any> {

    constructor() {

        super();

        if (process.env.DATABASE_URL) {

            this.setKeyValue('url', process.env.DATABASE_URL);

        } else {

            this.setKeyValue('dialect', process.env.DATABASE_DIALECT || 'postgres');
            this.setKeyValue('host', process.env.DATABASE_HOST || 'localhost');
            this.setKeyValue('database', process.env.DATABASE_NAME || 'postgres');
            this.setKeyValue('username', process.env.DATABASE_USERNAME || 'postgres');
            this.setKeyValue('port', process.env.DATABASE_PORT || '5432');

            if (process.env.DATABASE_PASSWORD) {

                this.setKeyValue('password', process.env.DATABASE_PASSWORD);

            }

        }




    }

};