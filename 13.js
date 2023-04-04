console.log("Imprimir y contar los números que son múltiplos de 2 o de 3 que hay entre 1 y 100");

let cont=0;

for(let i=1; i<=100; i++){
  if(i%2==0 && i%3!=0){
    console.log("Múltiplo de 2: "+i);
    cont++;
  }elif(i%3==0 && i%2!=0){
    console.log("Múltiplo de 3: "+i);
    cont++;
  }elif(i%2==0 && i%3==0){
    console.log("Múlitplo de 2 y 3: "+i);
    cont++;
  }
console.log("El total de números que son múltiplos de 2 o 3 es: "+cont);
  
