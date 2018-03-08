module.exports = (app) => {

    app.use(function(request, response, next) {

        const error = new Error('Not Found');
        error.status = 404;
        next(error);

    });

    if (app.get('env') === 'development') {

        app.use(function(error, request, response, next) {

            response.status(error.status || 500).send({

                message: error.message,
                error: error

            });

        });

    }

    app.use(function(error, request, response, next) {

        response.status(error.status || 500).send({

            message: error.message,
            error: {}

        })

    });

};