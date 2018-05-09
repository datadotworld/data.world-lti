import * as OAuth2Strategy from 'passport-oauth2';
import { verify } from './verify-callback';
import DataDotWorldStrategyOptions from './strategy-options';

export default class Strategy extends OAuth2Strategy {

    constructor() {

        super(DataDotWorldStrategyOptions, verify);

        this.name = 'data.world';

    }

}