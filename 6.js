console.log("Imprime todos los números naturales que hay desde el 1 hasta un número que se introduzca por teclado");

const readline = require('readline');
const n= readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

n.question('Introduzca un número: ',(num) => {
  for (let i=1; i <= num; i++){
    console.log(i);
  }
  n.close();
});
