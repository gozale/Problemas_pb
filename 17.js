console.log("Imprimir, contar y sumar los múltiplos de 2 que hay entre una serie de números, tal que el segundo sea mayor o igual que el primero");

let lista=[1,2,3,4,5,6,7,8,9,10]
let cont=0;
let sum=0;

for(let i=0; i<lista.length; i++){
  console.log(lista[i]);
  cont++;
  sum+=i;
}
console.log("El número de elementos de la lista es: "+cont);
console.log("La suma de los elementos de la lista es: "+sum);
