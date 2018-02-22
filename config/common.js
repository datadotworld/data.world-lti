module.exports = (app, express) => {

    const cookieParser = require('cookie-parser');
    const bodyParser = require('body-parser');
    const morgan = require('morgan');

    require('dotenv').config();

    if (process.env.NODE_ENV !== 'test') {

        app.use(morgan('dev'));

    }

    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false}));

};