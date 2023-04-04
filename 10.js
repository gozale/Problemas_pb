console.log("Introduce un número para saber si es par o impar");

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingresa un número: ',(num)=>{
    if(isNaN(num)){ 
        console.log("No ingresó un número") 
    }else{
        ((num % 2) == 0) ? console.log("Par") : console.log("Impar");
    }
    rl.close();
});
