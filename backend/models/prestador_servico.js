const { DataTypes } = require("sequelize");

const db = require("../db/conn");
const { type } = require("os");

const prestador_servico = db.define("prestador_servico", {
  CD_PREST_SERV: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
});

module.exports = prestador_servico;
