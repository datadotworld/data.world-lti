const redis = require('redis');

let options;

if (process.env.REDIS_URL) {

    options = process.env.REDIS_URL;

} else {

    options = {

        host: process.env.REDIS_HOST || '127.0.0.1',
        port: process.env.REDIS_PORT || 6379,
        path: process.env.REDIS_PATH || null

    };

}

let client = {};

if (process.env.NODE_ENV  !== 'test') {

    client = redis.createClient(options);

}

module.exports = client;