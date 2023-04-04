console.log("Introduce un número por teclado y que diga si es positivo o negativo");

const readline = require('readline');

const rl = readline.createInterface({ 
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa un número: ',(num) =>{
  if(isNaN(num)){
    console.log("No es un número");
  }else{
    if(num>=0){
      console.log("Número positivo");
    }else{
      console.log("Número negativo");
    }
  }
  rl.close();
});
  
