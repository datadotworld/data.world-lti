import { StrategyOptions } from "passport-oauth2";
import DataDotWorldConfig from '../../config/data.world';

export class DataDotWorldStrategyOptions implements StrategyOptions {

    authorizationURL: string;
    tokenURL: string;
    clientID: string;
    clientSecret: string;
    callbackURL: string;

    constructor() {

        this.authorizationURL = 'https://data.world/oauth/authorize';
        this.tokenURL = 'https://data.world/oauth/access_token';

        this.clientID = DataDotWorldConfig.getKeyValue('client_id');
        this.clientSecret = DataDotWorldConfig.getKeyValue('client_secret');
        this.callbackURL = DataDotWorldConfig.getKeyValue('connector_uri');

    }

}

export default new DataDotWorldStrategyOptions();