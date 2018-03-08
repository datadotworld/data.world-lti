const express = require('express');
const router = express.Router();
const path = require('path');

router.get('*', (request, response, next) => {

        let options = {

            root: path.relative(process.cwd(), __dirname) + '/public',
            dotfiles: 'deny',
            headers: {

                'x-timestamp': Date.now(),
                'x-sent': true

            }

        };

        response.sendFile('index.html', options, (error) => {

            if (error) {

                next(error);

            }

        });

});

module.exports = router;