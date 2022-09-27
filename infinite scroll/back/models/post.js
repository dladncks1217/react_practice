module.exports = (sequelize, DataTypes) =>
  sequelize.define("post", {
    nick: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  });
