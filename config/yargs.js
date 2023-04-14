const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .check((argv,options) => {
                    if(isNaN(argv.b) && !Number.isInteger(argv.b)){
                        throw 'La base tiene que ser un número entero'
                    }
                    return true;
                })
                .option('h',{
                    alias:'hasta',
                    type: 'number',
                    demandOption: true,
                    default: 10,
                    describe: 'Es el limite de la tabla de multiplicar'
                })
                .check((argv,options) => {
                    if(isNaN(argv.h) && !Number.isInteger(argv.h)){
                        throw 'El limite tiene que ser un número entero'
                    }
                    return true
                })
                .option('l',{
                    alias:'listar',
                    type: 'boolean',
                    demandOption: true,
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                .argv;

module.exports = argv;