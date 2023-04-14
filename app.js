const {crearArchivo}  = require('./helpers/multiplicar.js')
const colors = require('colors')
const argv = require('./config/yargs.js')


console.clear();
crearArchivo(argv.b,argv.l,argv.h)
      .then(resultado => console.log(resultado))
      .catch(error => console.log(error))

