import * as OAuth2Strategy from 'passport-oauth2';

function verify(accessToken: string, refreshToken: string, profile: any, done: any) {

    return done(null, {

        avatarUrl: 'test',
        displayName: 'test',
        id: 'test',
        created: 'test',
        updated: 'test'
    });
}

export default class DataDotWorldStrategy extends OAuth2Strategy {

    constructor(clientId: string, clientSecret: string, callbackUrl: string) {

        let options = {

            authorizationURL: 'https://data.world/oauth/authorize',
            callbackUrl: callbackUrl,
            clientID: clientId,
            clientSecret: clientSecret,
            tokenURL: 'https://data.world/oauth/access_token'


        } as any;

        super(options, verify);

        this.name = 'data.world';

    }

    authorizationParams(options: any): any {

        let params = {} as any;

        params['redirect_uri'] = options['callbackUrl'];

        return params;

    }

}