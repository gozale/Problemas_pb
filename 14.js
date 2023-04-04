console.log("Imprime el mayor y el menor de una serie de 5 números que introduzcamos");

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
let num_list = [];
  
readline.question('Introduce un número: ', (num1) => {
  numeros.push(parseInt(num1));
  
readline.question('Introduce otro número: ', (num2) => {
  numeros.push(parseInt(num2));
  
readline.question('Introduce otro número: ', (num3) => {
  numeros.push(parseInt(num3));
  
readline.question('Introduce otro número: ', (num4) => {
  numeros.push(parseInt(num4));
  
readline.question('Introduce otro número: ', (num5) => {
  numeros.push(parseInt(num5));
  
let mayor = num_list[0];
let menor = num_list[0];
  
for (let i = 1; i < num_list.length; i++) {
  if (num_list[i] > mayor) {
    mayor = num_list[i];
  }
  if (num_list[i] < menor) {
    menor = num_list[i];
   }
}
  
console.log("El número mayor es: "+ mayor);
console.log("El número menor es: "+ menor);
  
readline.close();
});
});
});
});
});
