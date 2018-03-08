const secrets = require('./secrets');
const Registration = require('../database').sequelize.models.Registration;

module.exports.register = (name, email, organization, title) => {

    return Registration.create({

        name: name,
        email: email,
        title: organization,
        organization: title,
        consumerKey: secrets.generateKey(),
        sharedSecret: secrets.generateKey()

    });

};