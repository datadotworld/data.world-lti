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

    constructor(clientId: string, clientSecret: string, callbackUrl: string, redirectUri: string, verificationFn?: any) {

        let options = {

            authorizationURL: 'https://data.world/oauth/authorize',
            callbackUrl: callbackUrl,
            clientID: clientId,
            clientSecret: clientSecret,
            redirectUri: redirectUri,
            tokenURL: 'https://data.world/oauth/access_token'


        } as any;

        super(options, verificationFn || verify);

        this.name = 'data.world';

    }

    authorizationParams(options: any): any {

        let params = {} as any;

        params['redirect_uri'] = options['redirectUri'];

        return params;

    }

    tokenParams(options: any): any {

        let params = {} as any;

        return params;

    }

}