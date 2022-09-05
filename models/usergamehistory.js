"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class UserGameHistory extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.User);
        }
    }
    UserGameHistory.init(
        {
            date: DataTypes.DATE,
            playTime: DataTypes.INTEGER,
            exp: DataTypes.INTEGER,
            UserId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "UserGameHistory",
        }
    );
    return UserGameHistory;
};
