const express = require('express');
const app = express();

require('./config')(app, express);

const port = process.env.PORT || '3000';

app.listen(port, () => console.log(`Listening on ${ port }`));

module.exports = app;