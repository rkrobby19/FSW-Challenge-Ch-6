"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("UserBiodata", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            firstName: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            lastName: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            birthday: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            location: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            gender: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            phone: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
            UserId: {
                type: Sequelize.INTEGER,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("UserBiodata");
    },
};
