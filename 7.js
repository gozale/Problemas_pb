console.log("Introduce tantas frases como quieras y cuentalas");

const readline = require('readline');

const fs = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let contador=0;

function ingresarFrase(){
  fs.question("Introduce una frase o 'close': ", function(frase){
    if (frase.toLowerCase() === "close"){
      console.log("Fueron "+contador+" frases");
      fs.close();
    } else{
      contador++;
      ingresarFrase();
    }
  });
}

ingresarFrase();
