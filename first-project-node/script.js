/*

// criando servidor com código copiado da documentação do Node.js

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



/*setTimeout( myFunction, 5000)

//o await so deixar continuar o código dps que essa função for executada
//await function myFunction(){
function myFunction(){
    console.log('Esperando 5 segundos para aparecer!')
}

console.log('quando isso aparece?') //o eventloop roda o resto do código enquanto espera a primeira
*/

/*
function data (){
    const data = new Date()
    const horas = getHours()
    const minutos = getMinutes()
    const segundos = getSeconds()


    return `A data de hoje é ${data},
    hora ${horas}
    minutos ${minutos}
    segundos ${segundos}`

}*/

//faz execução linha por linha
//código asincrono que passa uma função como argumento
/*const fs = require('fs')
console.log('Primeira saída')
fs.readFile('./doc.txt', callback) //ler o conteúdo dessa arquivo, permite ler documentos
function callback (err, conteudo){
    if(err) return console.error(err)
    console.log(String(conteudo))
}
console.log('Segunda saída')
console.log('Terceira saída')
*/

/*
//é sincrono pois não passa nenhuma função como argumento
function soma(){
    const resultado = 2 + 2
    if (resultado === 4) sucesso()
    else erro()
}

function sucesso(){
    console.log('Sucesso! a soma é 4.')
}

function erro(){
    console.log('Erro. A soma não deu 4!')
}

soma()*/
/*
//assincrono

function soma(callback, callbackErro){
    const resultado = 2 + 2
    if (resultado === 4) callback()
    else callbackErro()
}

//copiando o conteudo das funçãos para dentro da referencia, se tivesse o () estaria fazendo a utilização das intruções das funções
soma(
    () => { console.log('Sucesso! a soma é 4.') }, 
    () => { console.log('Erro. A soma não deu 4!') }) 
*/


//resolve aceitação -- then
//reject rejeição --  catch
/*
const p = new Promise((resolve, reject) => {
    const resultado = 1 + 1
    if (resultado === 2) resolve('Sucesso! a soma é 2.')
    else reject('Erro. A soma não deu 2!')
})

p.then((mensagem) => { 
    console.log(mensagem)
})
.catch((mensagem) => { 
    console.log(mensagem)
})*/

const melhorProgramador = 'joao'
const Omelhor = new Promise((resolve, reject) =>{
    if (melhorProgramador == 'joao') resolve({
        nome: melhorProgramador,
        mensagem: 'humildemente o melhor!'
        
    })
    else reject({
        mensagem01: 'Tá errado...',
        mensagem02: melhorProgramador + ', sério? '})
})

Omelhor.then((objeto) => {
    console.log(objeto.nome + ' é ' + objeto.mensagem)
})
.catch((objeto) =>{
    console.log(objeto.mensagem02 + objeto.mensagem01)
})



/*
const melhorProgramador = 'João Felix'

function oMelhor(callback, callbackErro){
    if(melhorProgramador == 'João Felix'){
        callback({
            nome: melhorProgramador,
            mensagem: 'humildemente o melhor!'
        
        })

    }else{
        callbackErro({
            mensagem01: 'Tá errado...',
            mensagem02: melhorProgramador + ', sério? '
        })
    }
}

oMelhor((objeto) => {
    console.log(objeto.nome + ' é ' + objeto.mensagem)
}
, (objeto) =>{
    console.log(objeto.mensagem02 + objeto.mensagem01)
})
*/
