const express = require('express');
const http = require('http');
const path = require('path');

const app = express();
const port = 3000;

require('./config')(app, express);

app.set('views',[  __dirname + '/lms/views' ]);
app.set('view engine', 'pug');

app.use(express.static('public'));

if (!module.parent) {

    app.listen(port, (error) => {

        if (error) {

            console.log(error);

        } else {

            console.log(`Listening on ${ port }`);

        }

    });

}

const server = http.createServer(app);

module.exports = app;
module.exports.server = server;
