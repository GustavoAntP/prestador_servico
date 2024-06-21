const routes = require('express').Router()
const CategoriaController = require('../controller/PrestadorController.js')

routes.post('/cadastro', CategoriaController.CadastroCategoria)
routes.delete('/deletar/:ID_CATEGORIA', CategoriaController.DeletarCategoria)
routes.get('/obter/:ID_CATEGORIA', CategoriaController.ObterCategoria)
routes.get('/listar', CategoriaController.ListarCategorias)
routes.patch('/editar/:ID_CATEGORIA', CategoriaController.EditarCategoria)

module.exports = routes