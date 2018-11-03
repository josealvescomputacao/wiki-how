const api = require('../api')

//tela para adicionar um item ao banco de dados
const novaForm = async (req,res) => {   
    const categorias = await api.list('categorias')     
    res.render('publicacoes/nova', {categorias})                  
}   

const nova = async (req,res) => { 
    await api.create('publicacoes/'+ req.body.categoria, {
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    })
    //res.send(req.body)    //envia o corpo da requisicao feita ao servidor, para o navegador, porem sem renderiza-la   
    res.redirect('/publicacoes/categoria/'+req.body.categoria)                      
}

//tela com os itens trazidos do banco de dados
const list = async (req,res) => {
    const categoria = req.params.categoria
    const publicacoes = await api.list('publicacoes/'+categoria)
    res.render('publicacoes/index', {          //renderiza na tela todos os itens do objeto categoria em forma de string   
        publicacoes,
        categoria
    })  
    res.redirect('/publicacoes')
}


const editarForm = async (req,res) => {    
    const publicacao = await api.get('publicacoes/'+req.params.categoria, req.params.id)
    res.render('publicacoes/editar', {
        publicacao,
        categoria: req.params.categoria
    })                 
}

const editar = async (req,res) => {   
    await api.update('publicacoes/'+req.params.categoria, req.params.id, {
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    })
    res.redirect('/publicacoes/categoria/'+req.params.categoria)                
}

const excluir = async (req,res) => {         //usando get aqui pq foi feito um link  
    await api.apagar('publicacoes/'+req.params.categoria, req.params.id)
    res.redirect('/publicacoes/categoria/'+req.params.categoria)               
}
module.exports = {
    novaForm,
    nova,
    list,
    excluir,
    editarForm,
    editar
}