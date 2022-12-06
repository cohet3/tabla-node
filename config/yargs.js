const argv = require('yargs')
.option('b',{
     alias: 'base',
     type: 'number',
     demandOption: true,
     describe:'Es la base de la tabal de multiplicar'
})
.option('l',{
     alias: 'listar',
     type: 'boolean',
     demandOption: true,
     default: false,
     describe: 'Muestra la tabal en consola'
})
.option('h',{
    alias: 'hasta',
    type: 'number',
    default:10,
    describe: 'Este el límite del multiplicador'
})
.check( ( argv, options) => {
     if( isNaN( argv.b ) ){
          throw 'la base tiene que ser un número'
     }
     return true;
})
.argv;

module.exports = argv; 