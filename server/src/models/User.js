const { DataTypes } = require("sequelize");

module.exports = (dataBase) => {
  dataBase.define(
    "User",
    {                              //SEQUELIZE asigna un id de forma automática
            username: {
        type: DataTypes.STRING,
        allowNull: true,
        isEmail: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    { timestamps: false }
  );
};
