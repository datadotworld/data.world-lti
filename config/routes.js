module.exports = (app) => {

    app.route('/health')
        .get((req, res) => {

            res.sendStatus(200);

        });

    app.route('/register')
        .get((req, res) => {

            res.send('GET /register');

        })
        .post((req, res) => {

            let response = {

                headers: req.headers,
                body: req.body,
                params: req.params,
                query: req.query,
                cookies: req.cookies,
                signedCookies: req.signedCookies

            };

            res.json(response);

        });

};