//requireds
const fs = require('fs');
const colors = require('colors')

let listarTabla = (base, limite = 10) => {
    console.log('======================'.green);
    console.log(`Tabla de ${base}`.green);
    console.log('======================'.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`) //error que se imprime en el .catch
            return;
        }

        let dato = ''

        for (let i = 1; i <= limite; i++) {
            dato += `${base} * ${i} = ${base * i} \n`;
        }

        //example
        fs.writeFile(`archivos/tabla-${base}-al-${limite}.txt`, dato, (err) => { //esta línea guarda los archivos en el folder archivos
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`)
        });
    })
}

//se exportasn las funciones que tengamos para poderlas llamar en otros archivos
module.exports = {
    //por cada función que tengamos las ponemos aquí
    crearArchivo,
    listarTabla
}

