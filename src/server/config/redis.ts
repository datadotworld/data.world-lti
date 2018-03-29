export default class RedisConfig {

    host: string;
    path: string;
    port: number;
    url: string;

    constructor() {

        this.url = process.env.REDIS_URL || null;
        this.host = process.env.REDIS_HOST || '127.0.0.1';
        this.port = (process.env.REDIS_PORT || 6379) as number;
        this.path = process.env.REDIS_PATH || null;

    }

}