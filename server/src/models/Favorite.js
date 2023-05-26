const { DataTypes } = require("sequelize");

module.exports = (dataBase) => {
  dataBase.define(
    "Favorite",
    {
      name: {
        //SEQUELIZE asigna un id de forma automática
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("Alive", "Dead", "Unknown"),
        allowNull: false,
      },
      species: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender: {
        type: DataTypes.ENUM("Female", "Male", "Genderless", "Unknown"),
        allowNull: false,
      },
      origin: {
        type: DataTypes.JSON, //{name: Earth, url: abcdhijklm}
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
