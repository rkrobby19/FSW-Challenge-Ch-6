"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class UserBiodata extends Model {
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
    UserBiodata.init(
        {
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING,
            birthday: DataTypes.DATE,
            location: DataTypes.STRING,
            gender: DataTypes.STRING,
            phone: DataTypes.TEXT,
            UserId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "UserBiodata",
        }
    );
    return UserBiodata;
};
