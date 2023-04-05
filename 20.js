console.log("Calcular el factorial de un número, mediante funciones");

function fact(num) {
    if (num <= 0) return 1;
    else return (num * fact(num - 1));
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingresa un número para obtener su factorial: ", (answer) => {
    console.log("El factorial del número "+answer+" es: "+fact(Number.parseInt(answer)));
    rl.close();
});
