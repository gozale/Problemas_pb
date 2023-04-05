console.log("Hacer un programa que calcule independientemente la suma de los pares y los impares de los números entre 1 y 1000");

let sum1 = 0;
let sum2 = 0;
for (let i = 1; i<= 1000; i++){
    if(i % 2 == 0) sum1 += i;
    else sum2 += i;
}
console.log("Suma de números pares: "+sum1);
console.log("Suma de números impares: " +sum2);
