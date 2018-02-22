module.exports = (app, express) => {

    require('./common')(app, express);
    require('./routes')(app);
    require('./error')(app);

};