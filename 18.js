console.log("Hacer un programa que cuente las veces que aparece una determinada letra en una frase que introduciremos por teclado");

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let fracesita="";
let letr='';
let cont=0;

rl.question("Ingresa la frase",(frase_inp) =>{
  fracesita=frase_inp;

rl.question("Ingresa la letra a buscar en la frase",(letra) =>{
  letr=letra;

  for(let l of fracesita){
    if(l===letr) cont++;
  }
  console.log("La letra "+letr+" aparece "+cont+" veces en la frase "+ fracesita);
  rl.close();
});
});

rl.prompt();
