console.log("Comprobar si un número mayor o igual que la unidad es primo");

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
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line',(linea)=>{
    console.log("La primaridad del número es: " + esPrimo(Number.parseInt(linea)));
    rl.close();
});
