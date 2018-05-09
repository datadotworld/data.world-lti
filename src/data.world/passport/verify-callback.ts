import { VerifyCallback } from "passport-oauth2";

export const callback = (err?: Error | null, user?: object, info?: object) => {

    return true;

};

export const verify = (accessToken: string, refreshToken: string, profile: any, verified: VerifyCallback) => {

    return callback(null, { user: true }, {});

};