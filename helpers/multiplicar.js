const fs = require('fs');
const colors = require('colors')

const crearArchivo = async (base = 5, listar = false, limite = 10) => {
  try {
    let inicio = 1;
   
    console.log('========================'.green);
    console.log(`Tabla de multiplicar del número: ${colors.blue(base)}`);
    console.log('========================\n'.green);

    let salida='';
    let consola = '';

    for (inicio; inicio <= limite; inicio++) {
      salida += `${base} x ${ inicio } = ${base * inicio}\n`;
      consola += `${base} ${ colors.green('x')} ${ inicio } ${ colors.green('=') } ${base * inicio}\n`;
      
    }
   
    if  (fs.existsSync(`./salida/tabla-${base}.txt`)) {
      return new Promise((resolve, reject) => resolve (`tabla-${base}.txt ya existe, por lo tanto no se creo`.red) );
    } else {
      return new Promise((resolve, reject) => {
        fs.writeFile(`./salida/tabla-${base}.txt`, salida, (err) => {
          if (err) reject(err);

          !listar  ? resolve(`Tabla-${base}.txt creado correctamente`.rainbow) : resolve(consola + `\nTabla: ${base}.txt creado correctamente`.green)
          
        });
      });
    }
  } catch (error) {
    throw(error);
  }
};

module.exports = {
  crearArchivo,
};
