const path = require('path');

module.exports = {

    development: {

        dialect: 'sqlite',
        storage: process.env.SQLITE_PATH || path.resolve(process.cwd(), __dirname, '../storage/database.sqlite'),
        operatorsAliases: false

    },
    test: {

        dialect: 'sqlite',
        storage: process.env.SQLITE_PATH || path.resolve(process.cwd(), __dirname, '../storage/database.sqlite'),
        operatorsAliases: false

    },
    production: {

        dialect: process.env.DATABASE_DIALECT || 'postgres',
        host: process.env.DATABASE_HOST || 'localhost',
        port: process.env.DATABASE_PORT || '5432',
        database: process.env.DATABASE_NAME || 'postgres',
        username: process.env.DATABASE_USERNAME || 'postgres',
        password: process.env.DATABASE_PASSWORD || null,
        operatorsAliases: false

    }

};