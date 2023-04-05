console.log("Introducir dos números por teclado, imprimir los números naturales que hay entre ambos, empezando por el más pequeños, contar cuantos hay y cuantos son pares, calcular la suma de los impares");

const readline=require('readline');

const rl=readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let count_tot=0;
let count_par=0;
let sum_imp=0;

