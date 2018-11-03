//aqui consome a api do banco de dados, enviando e recebendo dados dele,  e troca dados com o front-end
const api = require('../api')

const novaForm = (req,res) => {        //front requisitando ao servidor dados da do arquivo nova, que esta na pasta categorias (/categorias/nova)
    res.render('categorias/nova')                   //servidor respondendo para o front no endereco /categoria/nova (renderiza a tela de envio de dados)
}

const nova = async (req,res) => {       
    await api.create('categorias', {
        categoria: req.body.categoria
    })
    //res.send(req.body)    //envia o corpo da requisicao feita ao servidor, para o navegador, porem sem renderiza-la   
    res.redirect('/categorias')                      
}

const list = async (req,res) => {
    const categorias = await api.list('categorias')
    res.render('categorias/index', {          //renderiza na tela todos os itens do objeto categoria em forma de string   
        categorias
    })     
}

const excluir = async (req,res) => {         //usando get aqui pq foi feito um link  
    await api.apagar('categorias',req.params.id)
    await api.apagar('publicacoes',req.params.id)
    res.redirect('/categorias')                
}

const editarForm = async (req,res) => {       
    const categoria = await api.get('categorias', req.params.id)
    res.render('categorias/editar', {
        categoria
    })                
}

const editar = async (req,res) => {        
    await api.update('categorias', req.params.id, {
        categoria: req.body.categoria
    })
    
    res.redirect('/categorias')                
}

module.exports = {
    novaForm,
    nova,
    list,
    excluir,
    editarForm,
    editar
}