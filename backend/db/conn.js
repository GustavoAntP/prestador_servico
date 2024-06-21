const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('prestador', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

(async () => {
  try {
    await sequelize.authenticate()
  } catch (error) {
    console.error('Erro ao conectar', error)
  }
})

module.exports = sequelize