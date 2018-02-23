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
            let rendered = content.toString().replace('#message#', (json) => {

                if (typeof json !== 'string') {

                    json = JSON.stringify(json, undefined, 2);

                }

                json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

                return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, (match) => {

                    let cls = 'number';

                    if (/^"/.test(match)) {

                        if (/:$/.test(match)) {

                            cls = 'key';

                        } else {

                            cls = 'string';

                        }

                    } else if (/true|false/.test(match)) {

                        cls = 'boolean';

                    } else if (/null/.test(match)) {

                        cls = 'null';
                    }

                    return '<span class="' + cls + '">' + match + '</span>';

                });

            });

            return callback(null, rendered)
        })
    });

    app.set('views', './views');
    app.set('view engine', 'ntl');

};