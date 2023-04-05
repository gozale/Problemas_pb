console.log("Introducir una frase por teclado. Imprimirla cinco veces en filas consecutivas, pero cada impresión ir desplazada cuatro columnas hacia la derecha");

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line',(line)=>{
    rl.close();
    for (let i = 0; i < 5; i++){
        console.log(line);
        line = '    ' + line;
    }
});

console.log("Ingresa una frase: ");
rl.prompt();
