module.exports = (app, express) => {

    require('./common')(app, express);

    app.use('/', require('../client/routes'));
    require('../lms')(app, express);

    require('./error')(app);

};