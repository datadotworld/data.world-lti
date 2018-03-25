const fs = require('fs');
const path = require('path');
const basename = path.basename(module.filename);
const config = require('../config/database');
const Sequelize = require('sequelize');

let options;

if (process.env.DATABASE_URL) {

    options = process.env.DATABASE_URL;

} else {

    options = config[process.env.NODE_ENV];

}

const sequelize = new Sequelize(options);
const db = {};

let modelsDir = path.resolve(process.cwd(), __dirname, '../database/models');

fs.readdirSync(modelsDir)
    .filter(file =>
        (file.indexOf('.') !== 0) &&
        (file !== basename) &&
        (file.slice(-3) === '.js'))
    .forEach(file => {
        const model = sequelize.import(path.join(modelsDir, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(function(modelName) {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;