const { DataTypes } = require("sequelize");

const db = require("../db/conn");

const servico = db.define("servico", {
  ID_SERVICO: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  NOME_SERVICO: {
    type: DataTypes.TEXT,
  },
  VLR_SERVICO: {
    type: DataTypes.DECIMAL,
  },
});

module.exports = servico;
