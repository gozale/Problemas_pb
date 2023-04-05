console.log("Introducir dos números por teclado, imprimir los números naturales que hay entre ambos, empezando por el más pequeños, contar cuantos hay y cuantos son pares, calcular la suma de los impares");

const readline=require('readline');

const rl=readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let cont_tot=0;
let cont_par=0;
let sum_imp=0;

rl.question('Introduce un número: ', (num1) => {
  const n1 = parseInt(num1);
  
  rl.question('Introduce un número: ', (num2) => {
   const n2 = parseInt(num2);
     
    const menor = Math.min(n1,n2); 
    const mayor = Math.max(n1,n2);
    
    for (let i=menor; i<= mayor; i++){
      cont_tot++;
      console.log(i);
      if(i%2==0){
        cont_par++;
      }else{
        sum_imp+=i; 
      };  
    };
    console.log("Total de números en el rango: "+ cont_tot);
    console.log("Total de números pares: "+ cont_par);
    console.log("Suma de impares: "+ sum_imp);
    
    rl.close();
    
  });
});
