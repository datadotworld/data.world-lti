const secrets = require('./secrets');
const Registration = require('../../es5/src/database/index').sequelize.models.Registration;

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