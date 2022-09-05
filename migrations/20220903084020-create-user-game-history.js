"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("UserGameHistories", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            date: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            playTime: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            exp: {
                type: Sequelize.INTEGER,
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
        await queryInterface.dropTable("UserGameHistories");
    },
};
