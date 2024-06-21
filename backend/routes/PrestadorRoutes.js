const routes = require('express').Router()
const PrestadorController = require('../controller/PrestadorController.js')

routes.post('/cadastro', PrestadorController.CadastroPrestador)
routes.delete('/deletar/:CODIGO_PRESTADOR', PrestadorController.DeletarPrestador)
routes.get('/obter/:CODIGO_PRESTADOR', PrestadorController.BuscarPorID)
routes.get('/listar', PrestadorController.TodosPrestadores)
routes.patch('/editar/:CODIGO_PRESTADOR', PrestadorController.EditarPrestador)

module.exports = routes