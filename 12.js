console.log("Imprime todos los números del 1 al 100 y calcula la suma de los pares y los impares");

let pares=0;
let impares=0;

for(let i=1; i<=100; i++){
  console.log(i);
    if(i%2 == 0){
      pares=pares+i;
    }else{
      impares=impares+i;
    }
}
  
console.log("Suma de los números pares: " + pares);
console.log("Suma de los números impares: " + impares);
  
