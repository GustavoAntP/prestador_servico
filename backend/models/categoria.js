const { DataTypes } = require("sequelize");

const db = require("../db/conn");

const categoria = db.define("categoria", {
  ID_CATEGORIA: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  NOME_CATEGORIA: {
    type: DataTypes.TEXT,
  },
});

module.exports = categoria;
