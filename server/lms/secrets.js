const crypto = require('crypto');

module.exports.generateKey = () => {

    return crypto.randomBytes(16).toString('hex');

};