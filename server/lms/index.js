module.exports = (app) => {

    app.use('/lti', require('./routes'));

};