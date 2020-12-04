const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'); // entre {} se pone la funcion de module exports a usar
const argv = require('./config/yargs').argv;
const colors = require('colors/safe')


let comando = argv._[0]

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado:', colors.green(archivo)))
            .catch(err => console.log(err))
        break;

    default:
        console.log('Comando no reconocido');
}


//console.log(process.argv);
//console.log(argv.base);
//let parametro = argv[2]
//let base = parametro.split('=') [1]

