console.log("Solo puedes introducir 'S' o 'N'");

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa un caracter: ', (respuesta) =>{
  if (!(respuesta === 'S' || respuesta === 'N')){
    console.log('Caracter no válido');
  }
  else console.log('Caracter válido');
  rl.close();
});
