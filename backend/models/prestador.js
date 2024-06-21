const { DataTypes } = require("sequelize");

const db = require("../db/conn");

const categoria = require("./categoria");
const prestador_servico = require("./prestador_servico");
const servico = require("./servico");

const prestador = db.define("prestador", {
  CODIGO_PRESTADOR: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  NOME_PRESTADOR: {
    type: DataTypes.TEXT,
  },
  TEMPO_EXPERIENCIA: {
    type: DataTypes.INTEGER,
  },
});

prestador.belongsToMany(servico, {
  through: {
    model: prestador_servico,
  },
  foreignKey: "CODIGO_PRESTADOR",
  constraints: true,
});

servico.belongsToMany(prestador, {
  through: {
    model: prestador_servico,
  },
  foreignKey: "ID_SERVICO",
  constraints: true,
});

categoria.hasMany(prestador, { foreignkey: 'ID_CATEGORIA' });

module.exports = prestador;
