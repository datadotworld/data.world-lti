module.exports = {

    up: (queryInterface, Sequelize) =>

        queryInterface.createTable('Registrations', {

            id: {

                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER

            },
            ddwId: {

                allowNull: false,
                type: Sequelize.STRING

            },
            name: {

                type: Sequelize.STRING,
                allowNull: false

            },
            email: {

                type: Sequelize.STRING,
                allowNull: false

            },
            organization: {

                type: Sequelize.STRING,
                allowNull: false

            },
            title: {

                type: Sequelize.STRING,
                allowNull: false

            },
            consumerKey: {

                type: Sequelize.STRING(32),
                allowNull: false

            },
            sharedSecret: {

                type: Sequelize.STRING(32),
                allowNull: false

            },
            active: {

                type: Sequelize.BOOLEAN,
                defaultValue: false

            },
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,

        }),
    down: (queryInterface) => queryInterface.dropTable('Registrations')

};