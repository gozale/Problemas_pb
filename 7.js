console.log("Introduce tantas frases como quieras y cuentalas");

const readline = require('readline');

const fs = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let contador=0;
fs.on('line',()=>{
  contador++;
}).on('close', () =>{
  console.log('Total number of phrases: ' + contador);
  process.exit(0);
});

fs.prompt();
