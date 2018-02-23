const fs = require('fs');

module.exports = (app, express) => {

    const bodyParser = require('body-parser');
    const cookieParser = require('cookie-parser');
    const morgan = require('morgan');
    const path = require('path');

    require('dotenv').config();

    if (process.env.NODE_ENV !== 'test') {

        app.use(morgan('dev'));

    }

    app.use(express.static(path.join(__dirname, '..', '/public')));
    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true}));

    app.engine('ntl', function (filePath, options, callback) {

        fs.readFile(filePath, function (err, content) {

            if (err) return callback(err)

            // this is an extremely simple template engine
            let rendered = content.toString().replace('#title#', '<title>' + options.title + '</title>')
                .replace('#message#', '<h1>' + options.message + '</h1>');

            return callback(null, rendered)
        })
    });

    app.set('views', './views');
    app.set('view engine', 'ntl');

};