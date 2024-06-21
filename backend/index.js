const express = require('express');

// Iniciando o express
const app = express();

// Conectando ao banco
const conn = require("./db/conn");

// Models
const categoria = require('./models/categoria')
const prestador = require('./models/prestador')
const prestador_servico = require('./models/prestador_servico')
const servico = require('./models/servico')

// Configurando resposta JSON
app.use(express.json());

// Rotas

// Conexão com o banco
conn
  .sync()
  //.sync({force: true}) // Apaga todas as tabelas e faz novamente
  .then(async () => {  
    app.listen(5000, () => {
      console.log('Servidor rodando na porta 5000');
    });
  })
  .catch((err) => console.log(err));