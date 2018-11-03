//aqui estao as rotas do sistema para o objeto categorias, que possui o controller
const express = require('express')
const router = express.Router()

const controller = require('../controllers/categorias')

//Renderiza a Tela de Input
router.get('/nova', controller.novaForm)
//Create
router.post('/nova', controller.nova)
//Renderiza a Tela de Listagem de categorias
router.get('/', controller.list)
//Exclui uma categoria
router.get('/excluir/:id', controller.excluir)
//Editar uma categoria   
// 1 = carregar os dados da categoria especifica, alterar e salvar    
router.get('/editar/:id', controller.editarForm)
router.post('/editar/:id', controller.editar)


module.exports = router