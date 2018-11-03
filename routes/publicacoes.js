const express = require('express')
const router = express.Router()

const controller = require('../controllers/publicacoes')

//Renderiza a Tela de Input
router.get('/nova', controller.novaForm)
//Create
router.post('/nova', controller.nova)
//Renderiza a Tela de Listagem de categorias
router.get('/categoria/:categoria', controller.list)
//Exclui uma categoria
router.get('/excluir/:categoria/:id', controller.excluir)
//Editar uma categoria   
// 1 = carregar os dados da categoria especifica, alterar e salvar    
router.get('/editar/:categoria/:id', controller.editarForm)
router.post('/editar/:categoria/:id', controller.editar)


module.exports = router