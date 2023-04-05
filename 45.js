console.log("Tenemos el archivo DATOS.DAT con la misma estructura anterior, que esta indexado por el campo ID. Crear un programa que nos permita consultar un registro siempre que queramos");

const fs = require('fs');
const readline = require('readline');
let map = new Map();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const fr = readline.createInterface({
    input: fs.createReadStream('./DATOS.DAT'),
    crlfDelay: Infinity
});

fr.on('line', (linea) => {
    let obj = JSON.parse(linea);
    map.set(obj.id, obj);


    rl.question('Ingresa ID : ', (answer) => {
        console.log(map.get(answer))
        rl.close();
    });
});
