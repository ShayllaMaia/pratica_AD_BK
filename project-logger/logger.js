//instanciar o método EventEmitter no módulo events
const EventEmitter = require('events')
const fs = require('fs')
const path = require('path') 

const emitter = new EventEmitter() //carrega os metodos da classe eventemitter

//espera algo, escuta o evento. Uma listenner que é o método on
//executa a rotina 
emitter.on('log', (mensagem) => {
    //grita log que ta em start vai vir para dentro do documento de texto
    fs.appendFile(path.join(__dirname, 'log.txt'), mensagem, (err) => { //caminho mais dinamico pat.join()
        if(err) throw err //processamento de erro

    })

    console.log(mensagem)
} )

function log(mensagem){
    //emite o evento
    emitter.emit('log', mensagem)
}

//emite o evento
//emitter.emit('oi', 'o texto oi...')
//log('um log qualquer..')
//log('ouutro log qualquer...')

//copia o codigo de log para dentro de alguém
module.exports = log 