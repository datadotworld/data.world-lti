import {createClient} from 'redis';

import RedisConfig from '../../../src/config/redis';


describe('Integration Test(s) - Cache', () => {

    it('redis.ping() should return true', (done) => {

        let config = new RedisConfig();
        const redis = createClient(config);

        redis.ping((error) => {

            if (error) {

                done(error)

            } else {

                done();

            }

        });

    });

});


