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

            res.json(req);

        });

};