const http = require('http')
const fs = require('fs') //objeto q permite chegar nos objetos do módulo
const path = require('path')

http.createServer((req, res) => {
    //req são as requisições
	//res.write('Olá, mundo!')
    //joga para o front dizendo q o servidor ta ok
	//res.end('Ola, mundo!') //também joga conteúdo na tela mas não é tão funcional, end significa que chegou no final da criação

    //console.log(res) //joga o objeto res no servidor e mostra a documentação do res

    //definição de rotas padrão
    /*if(req.url === '/')
        return res.end('<h1>Página inicial</h1>')
    if(req.url === '/contato')
        return res.end('Página de contatos') //se tivesse o módulo fs tinha-se as rotas de páginas
	*/

    //servir o documento em html
    if(req.url === '/')
        fs.readFile(path.join(__dirname, 'public', 'index.html'), //ler o arquivo
        (err, conteudo) => { //passa o caminho e uma callback que trata o erro e configura o documento q vai ser lido
            if(err) throw err //tratamento do erro
            res.end(conteudo) //pega todo o texto de index e copia para o servir a pagina

        }) 

}).listen(5000, () => {
    console.log("Servidor rodando") //leva para o backend dizendo q o servidor ta ok
})