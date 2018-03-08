module.exports = (app, express) => {

    const bodyParser = require('body-parser');
    const cookieParser = require('cookie-parser');
    const morgan = require('morgan');

    if (process.env.NODE_ENV !== 'test') {

        app.use(morgan('dev'));

    }

    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true}));

};