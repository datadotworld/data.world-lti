import {Configurable} from './configurable';

export class DataDotWorldConfig extends Configurable<string, any> {

    constructor() {

        super();

        this.setKeyValue('client_id', process.env.DDW_CLIENT_ID || 'default');
        this.setKeyValue('client_secret', process.env.DDW_CLIENT_SECRET || 'something-secret');
        this.setKeyValue('connector_uri', process.env.DDW_CONNECTOR_REDIRECT || 'localhost');
        this.setKeyValue('redirect_uri', process.env.DDW_OAUTH_REDIRECT_URI || 'localhost');
        this.setKeyValue('response_type', process.env.DDW_OAUTH_RESPONSE_TYPE || 'code');

    }

}

export default new DataDotWorldConfig();