console.log("Imprime y cuenta los múltiplos de 3 desde el 1 hasta el número que se ingrese");

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let cont=0;

rl.question('Ingrese el número: ',(num) =>{
  is(isNaN(num)){
    console.log("No es un número")
  }else{
    for(let i=3; i<=num; i=i+3){
      cont++;
      console.log(i);
    }
  }
  console.log("Hubo "+cont+" múltiplos de 3");
  rl.close();
});
