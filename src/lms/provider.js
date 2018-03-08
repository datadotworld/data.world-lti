const lti = require('ims-lti');
const store = require('ims-lti').Stores.RedisStore;
const client = require('../config/redis');
const Registration = require('../database').sequelize.models.Registration;

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

        const nonceStore = new store(key, client);

        return new lti.Provider(key, secret, nonceStore);

    }

};