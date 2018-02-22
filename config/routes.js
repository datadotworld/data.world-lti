module.exports = (app) => {

    app.route('/register')
        .get((req, res) => {

            res.send('GET /register');

        })
        .post((req, res) => {

           console.log(req);
            res.json(req);

        });

};