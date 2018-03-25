module.exports = (sequelize, DataType) => {

    return sequelize.define('Registration', {

        name: {
            type: DataType.STRING,
            allowNull: false
        },
        email: {
            type: DataType.STRING,
            allowNull: false
        },
        organization: {
            type: DataType.STRING,
            allowNull: false
        },
        title: {
            type: DataType.STRING,
            allowNull: false
        },
        consumerKey: {

            type: DataType.STRING(32),
            allowNull: false

        },
        sharedSecret: {

            type: DataType.STRING(32),
            allowNull: false

        },
        active: {
            type: DataType.BOOLEAN,
            defaultValue: false
        }

    });

};