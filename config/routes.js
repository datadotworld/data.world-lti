const lti = require('ims-lti');

module.exports = (app) => {

    app.route('/config')
        .post((req, res, next) => {


            let options = {

                root: '/public/',
                dotfiles: 'deny',
                headers: {

                    'x-timestamp': Date.now(),
                    'x-sent': true

                }

            };

            res.sendFile('config.xml', options, (error) => {

                if (error) {

                    next(error);

                } else {

                    console.log('Sent:', 'config.xml');

                }

            })

        });

    app.route('/health')
        .get((req, res) => {

            res.sendStatus(200);

        });

    app.route('/register')
        .get((req, res) => {

            res.send('GET /register');

        })
        .post((req, res) => {

            let body = req.body;

            let provider = new lti.Provider(

                body['reg_key'],
                body['reg_pass']

            );



            res.json(provider);

        });

};