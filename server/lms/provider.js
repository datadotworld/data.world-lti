const lti = require('ims-lti');
const stores = require('ims-lti').Stores;
const client = require('../config/redis');
const Registration = require('../../es5/src/database/index').sequelize.models.Registration;

module.exports = {

    lookUpConsumerSecret: (key) => {

        return Registration.findAll({

            where: {

               consumerKey: key

            },
            limit: 1

        });

    },
    initialize: (key, secret) => {

        let nonceStore;

        if (process.env.NODE_ENV  !== 'test') {

            nonceStore = new stores.RedisStore(key, client);

        } else {

            nonceStore = new stores.MemoryStore();

        }

        return new lti.Provider(key, secret, nonceStore);

    }

};