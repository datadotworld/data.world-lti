module.exports = (app, express) => {

    const bodyParser = require('body-parser');
    const cookieParser = require('cookie-parser');
    const morgan = require('morgan');
    const path = require('path');

    require('dotenv').config();

    if (process.env.NODE_ENV !== 'test') {

        app.use(morgan('dev'));

    }

    app.use(express.static(path.join(__dirname, '..', 'public')));
    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true}));

};