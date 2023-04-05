console.log("Hacer un programa que nos permita introducir un número por teclado y sobre él se realicen las siguientes operaciones: comprobar si es primo, hallar su factorial o imprimir su tabla de multiplicar");

function esPrimo(n){
    if (n % 2 == 0 || n % 3 == 0) return false;
    let i = 5;
    while(i*i <= n){
        if (n % i == 0 || n % (i + 2) == 0 ){
            return false;
        }
        i += 6;
    }
    return true;
}

function imprimirTabla(num){
    for(let i = 1; i <= 10; i++){
        console.log(num*i);
    }
}
function fact(num) {
    if (num <= 0) return 1;
    else return (num * fact(num - 1));
}

function operaciones(op, n){
    switch (op){
        case 'prim':
            return esPrimo(n);
        case 'fact':
            return fact(n);
        case 'tabla':
            return imprimirTabla(n);
    }
}
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let param = new Array();
rl.on('line',(linea)=>{
    param = linea.split(',');
    console.log(operaciones(param[0],num.parseFloat(param[1])));
    rl.close();
});
console.log("Ingresa la operación ('prim','fact','tabla') y un número separado por una coma");
rl.prompt();
