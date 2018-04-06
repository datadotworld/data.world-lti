import * as crypto from 'crypto';

export default class SecretGenerator {

    public static generateKey():string {

        return crypto.randomBytes(16).toString('hex');

    }

}