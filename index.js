const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const categorias = require('./routes/categorias')   //importando o arquivo de rotas
const publicacoes = require('./routes/publicacoes')

//jade é uma engine de view tambe, porem ele muda a estrutuda do html, tornando mais dificil de se mexer com ele, e copiar codigos 
//bootstraps e colar aqui por exempo
app.set('view engine', 'ejs')   // ao fazer isso (setar a engine de template), é preciso fazer um diretorio views com um arquivo index.ejs
app.use(bodyParser.urlencoded())  // para o front-end pegar os dados do servidor

const port = process.env.PORT || 3000


app.get('/', async (request, response) => { 
    /*await axios.post('https://como-fazer-cbd16.firebaseio.com/categorias.json', {
        categoria: "receitas",
        nome: 'bolo'

    } )
    const content = await axios.get('https://como-fazer-cbd16.firebaseio.com/categorias.json')*/
    
    response.render('index')
})


app.use('/categorias', categorias)    //usando as rotas 
app.use('/publicacoes', publicacoes)

app.listen(port, (err) => {
    if(err){
        console.log(err)
    }else{
        console.log("Como fazer server is running on port: ", port)
    }
})