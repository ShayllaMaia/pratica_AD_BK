/*const os = require('os') 

//código sincrono
console.log(os.platform())

//desestruturação
const { freemem, totalmem } = os
console.log(`Memória livre: ${parseInt(freemem()/1024/2014)} MB 
Memória total: ${parseInt(totalmem()/2014/1024)} MB`) 

const total = parseInt(totalmem()/2014/1024)
const livre = parseInt(freemem()/1024/2014)
const usada = 100 - parseInt((livre/total)*100)
console.log('Total de memória usada:', usada)

//objeto literal
const stats = {
    total: `${total} MB`,
    livre: `${livre} MB`,
    usada: `${usada}%`
}
console.log(stats)
console.log("\n")
console.log("++++ MEMORY STATS +++++")
console.table(stats)
*/

//código assincrono

const os = require('os') 
const log = require('./logger')

//funcao que chama em intervalos, chamam o trecho de codigos
setInterval(() => {
    const { freemem, totalmem } = os
    console.log(`Memória livre: ${parseInt(freemem()/1024/2014)} MB 
    Memória total: ${parseInt(totalmem()/2014/1024)} MB`) 

    const total = parseInt(totalmem()/2014/1024)
    const livre = parseInt(freemem()/1024/2014)
    const usada = 100 - parseInt((livre/total)*100)
    console.log('Total de memória usada:', usada)

    //objeto literal
    const stats = {
        total: `${total} MB`,
        livre: `${livre} MB`,
        usada: `${usada}%`
    }

    console.clear()
    console.log(stats)
    console.log("\n")
    console.log("++++ MEMORY STATS +++++")
    console.table(stats)

    //importando a função de logger
    log(`${JSON.stringify(stats)}\n`)
}, 1000)
